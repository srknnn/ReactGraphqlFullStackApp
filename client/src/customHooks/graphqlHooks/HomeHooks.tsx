import { ApolloQueryResult } from "@apollo/client";
import { message } from "antd";
import {
  Exact,
  ListTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useListTodosQuery,
  useMarkTodoCompletedMutation,
  useMarkTodoUncompletedMutation,
} from "../../generated/graphql";

interface HookProb {
  refetch?: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<ListTodosQuery>>;
  setIsModalVisible?: (value: React.SetStateAction<boolean>) => void;
  token?: string;
}

export function useCreateTodo(prob: HookProb) {
  const [
    createTodoMutation,
    { data: createData, loading: createLoading, error: createError },
  ] = useCreateTodoMutation({
    context: {
      headers: {
        authorization: prob.token,
      },
    },
    onCompleted: (Data) => {
      message.success("New record has been created!");
      if (prob.setIsModalVisible) prob.setIsModalVisible(false);
      if (prob.refetch) prob.refetch();
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return [createTodoMutation, createData, createLoading, createError] as const;
}

export function useMarkTodoCompleted(prob: HookProb) {
  const [
    markTodoCompletedMutation,
    { data: completedData, loading: completedLoading, error: completedError },
  ] = useMarkTodoCompletedMutation({
    context: {
      headers: {
        authorization: prob.token,
      },
    },
    onCompleted: (data) => {
      message.success("Selected record has been completed!");
      if (prob.refetch) prob.refetch();
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return [
    markTodoCompletedMutation,
    completedData,
    completedLoading,
    completedError,
  ] as const;
}

export function useMarkTodoUncompleted(prob: HookProb) {
  const [
    markTodoUncompletedMutation,
    {
      data: unCompletedData,
      loading: unCompletedLoading,
      error: unCompletedError,
    },
  ] = useMarkTodoUncompletedMutation({
    context: {
      headers: {
        authorization: prob.token,
      },
    },
    onCompleted: (data) => {
      message.success("Selected record has been uncompleted!");
      if (prob.refetch) prob.refetch();
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return [
    markTodoUncompletedMutation,
    unCompletedData,
    unCompletedLoading,
    unCompletedError,
  ] as const;
}

export function useDeleteTodo(prob: HookProb) {
  const [
    deleteTodoMutation,
    { data: deleteData, loading: deleteLoading, error: deleteError },
  ] = useDeleteTodoMutation({
    context: {
      headers: {
        authorization: prob.token,
      },
    },
    onCompleted: (data) => {
      message.success("Selected record has been deleted!");
      if (prob.refetch) prob.refetch();
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return [deleteTodoMutation, deleteData, deleteLoading, deleteError] as const;
}
