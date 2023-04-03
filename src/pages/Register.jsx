import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Loading from "../components/Loading/Loading";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.email), {
        uid: user.uid,
        displayName: userName,
        email,
        password,
      });

      setLoading(false);
      toast.success("Account created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Helmet title="register">
      <CommonSection title="register" />

      <section>
        <Container>
          <Row>
            {loading ? (
              <Loading />
            ) : (
              <Col lg="8" md="8" sm="12" className="m-auto text-center">
                <form className="form mb-5" onSubmit={register}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form__group">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="add__btn">
                    Register
                  </button>
                </form>
                <p>
                  Already have an account?
                  <Link to="/login"> Login</Link>
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
