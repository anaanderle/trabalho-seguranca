import "./homeScreen.css";
import { useEffect, useState } from "react";
import {
  useGetAllPost,
  useForm,
  usePost,
  useGetInvites,
  useAcceptInvite,
} from "../../hooks";
import {
  Button,
  FormContainer,
  Header,
  Post,
  TextInput,
  CardUser,
} from "../../components";

export function HomeScreen() {
  return (
    <section className="mainContainer">
      <Header />
      <div className="homeScreen"></div>
    </section>
  );
}
