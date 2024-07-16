import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!, $authors: [String], $image: String, $description: String!, $title: String!) {
        saveBook(bookId: $bookId, authors: $authors, image: $image, description: $description, title: $title ) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
      }
    }
  }
`;


// oAHQ9KUTcA17hJBj

