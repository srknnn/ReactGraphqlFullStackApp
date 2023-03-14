import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  deleteTodo: Scalars['Boolean'];
  login: Scalars['String'];
  markTodoCompleted: Scalars['Boolean'];
  markTodoUncompleted: Scalars['Boolean'];
  signUp: User;
};


export type MutationCreateTodoArgs = {
  title: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMarkTodoCompletedArgs = {
  id: Scalars['ID'];
};


export type MutationMarkTodoUncompletedArgs = {
  id: Scalars['ID'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  listTodos: Array<Todo>;
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, name: string, email: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type ListTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTodosQuery = { __typename?: 'Query', listTodos: Array<{ __typename?: 'Todo', id: string, title: string, completed: boolean }> };

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, completed: boolean } };

export type MarkTodoCompletedMutationVariables = Exact<{
  markTodoCompletedId: Scalars['ID'];
}>;


export type MarkTodoCompletedMutation = { __typename?: 'Mutation', markTodoCompleted: boolean };

export type MarkTodoUncompletedMutationVariables = Exact<{
  markTodoUncompletedId: Scalars['ID'];
}>;


export type MarkTodoUncompletedMutation = { __typename?: 'Mutation', markTodoUncompleted: boolean };

export type DeleteTodoMutationVariables = Exact<{
  deleteTodoId: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: boolean };


export const SignUpDocument = gql`
    mutation signUp($name: String!, $email: String!, $password: String!) {
  signUp(name: $name, email: $email, password: $password) {
    id
    name
    email
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ListTodosDocument = gql`
    query ListTodos {
  listTodos {
    id
    title
    completed
  }
}
    `;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: Apollo.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
      }
export function useListTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
        }
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosQueryResult = Apollo.QueryResult<ListTodosQuery, ListTodosQueryVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($title: String!) {
  createTodo(title: $title) {
    id
    title
    completed
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const MarkTodoCompletedDocument = gql`
    mutation MarkTodoCompleted($markTodoCompletedId: ID!) {
  markTodoCompleted(id: $markTodoCompletedId)
}
    `;
export type MarkTodoCompletedMutationFn = Apollo.MutationFunction<MarkTodoCompletedMutation, MarkTodoCompletedMutationVariables>;

/**
 * __useMarkTodoCompletedMutation__
 *
 * To run a mutation, you first call `useMarkTodoCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoCompletedMutation, { data, loading, error }] = useMarkTodoCompletedMutation({
 *   variables: {
 *      markTodoCompletedId: // value for 'markTodoCompletedId'
 *   },
 * });
 */
export function useMarkTodoCompletedMutation(baseOptions?: Apollo.MutationHookOptions<MarkTodoCompletedMutation, MarkTodoCompletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkTodoCompletedMutation, MarkTodoCompletedMutationVariables>(MarkTodoCompletedDocument, options);
      }
export type MarkTodoCompletedMutationHookResult = ReturnType<typeof useMarkTodoCompletedMutation>;
export type MarkTodoCompletedMutationResult = Apollo.MutationResult<MarkTodoCompletedMutation>;
export type MarkTodoCompletedMutationOptions = Apollo.BaseMutationOptions<MarkTodoCompletedMutation, MarkTodoCompletedMutationVariables>;
export const MarkTodoUncompletedDocument = gql`
    mutation MarkTodoUncompleted($markTodoUncompletedId: ID!) {
  markTodoUncompleted(id: $markTodoUncompletedId)
}
    `;
export type MarkTodoUncompletedMutationFn = Apollo.MutationFunction<MarkTodoUncompletedMutation, MarkTodoUncompletedMutationVariables>;

/**
 * __useMarkTodoUncompletedMutation__
 *
 * To run a mutation, you first call `useMarkTodoUncompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoUncompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoUncompletedMutation, { data, loading, error }] = useMarkTodoUncompletedMutation({
 *   variables: {
 *      markTodoUncompletedId: // value for 'markTodoUncompletedId'
 *   },
 * });
 */
export function useMarkTodoUncompletedMutation(baseOptions?: Apollo.MutationHookOptions<MarkTodoUncompletedMutation, MarkTodoUncompletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkTodoUncompletedMutation, MarkTodoUncompletedMutationVariables>(MarkTodoUncompletedDocument, options);
      }
export type MarkTodoUncompletedMutationHookResult = ReturnType<typeof useMarkTodoUncompletedMutation>;
export type MarkTodoUncompletedMutationResult = Apollo.MutationResult<MarkTodoUncompletedMutation>;
export type MarkTodoUncompletedMutationOptions = Apollo.BaseMutationOptions<MarkTodoUncompletedMutation, MarkTodoUncompletedMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($deleteTodoId: ID!) {
  deleteTodo(id: $deleteTodoId)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      deleteTodoId: // value for 'deleteTodoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;