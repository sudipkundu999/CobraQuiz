import {
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../utils";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  LocationState,
  LoginFormState,
  UseAuthContext,
  UserDataState,
} from "../interfaces";

const AuthContext = createContext({} as any);

const useAuth: UseAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: any) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const initialFromState: LoginFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFromState);
  const [userName, setUserName] = useState("Login");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const initialUserData: UserDataState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    uid: "",
    totalScore: 0,
    totalQuizPlayed: 0,
  };
  const [userData, setUserData] = useState(initialUserData);

  const login = async (email: string, password: string) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user.uid)
      .catch((error) => {
        notifyError(error.code.split("/")[1]);
      });
    if (res) {
      notifySuccess("Login Successful");
      setFormData(initialFromState);
      const locationState = location.state as LocationState;
      navigate(locationState?.from?.pathname || "/");
    }
  };

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  const loginAsGuest = async () => {
    login("alex@cobraquiz.com", "cobraquiz");
  };

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
      .then((userCredential) => userCredential.user)
      .catch(() => notifyError("Email already in use"));
    const { uid } = user as User;
    if (user) {
      await setDoc(doc(db, `users/${uid}`), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        totalScore: 0,
        totalQuizPlayed: 0,
        uid: uid.trim(),
      }).then(() => {
        notifySuccess("Signup Successful");
        setFormData(initialFromState);
        const locationState = location.state as LocationState;
        navigate(locationState?.from?.pathname || "/");
      });
    }
  };

  const logoutHandler = async () => {
    await signOut(auth)
      .then(() => {
        setUserName("Login");
        setIsUserLoggedIn(false);
        setUserData(initialUserData);
        notifySuccess("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        notifyError(error.code);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const res = await getDoc(doc(db, `/users/${user.uid}`));
        const data = res.data();
        setUserData({
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: data?.email,
          password: data?.password,
          totalScore: data?.totalScore,
          totalQuizPlayed: data?.totalQuizPlayed,
          uid: data?.uid.trim(),
        });
        setUserName(data?.firstName);
        setIsUserLoggedIn(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateScore = async (score: number) => {
    const newTotalScore = userData.totalScore + score;
    const newTotalQuizPlayed = userData.totalQuizPlayed + 1;
    setUserData((prev) => ({
      ...prev,
      totalScore: newTotalScore,
      totalQuizPlayed: newTotalQuizPlayed,
    }));
    await updateDoc(doc(db, `/users/${userData.uid}`), {
      totalScore: newTotalScore,
      totalQuizPlayed: newTotalQuizPlayed,
    }).catch((error) => console.log(error.code));
  };

  return (
    <AuthContext.Provider
      value={{
        formData,
        setFormData,
        onSubmitLogin,
        onSubmitSignup,
        userName,
        isUserLoggedIn,
        logoutHandler,
        userData,
        loginAsGuest,
        updateScore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
