import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repo: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search user

  // Get User

  // Get Repos

  // Clear Users

  // Set Loadings

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repo: state.repo,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
