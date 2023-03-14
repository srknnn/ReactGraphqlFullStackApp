import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  message,
  Layout,
} from "antd";
import { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useListTodosQuery,
  useMarkTodoCompletedMutation,
  useMarkTodoUncompletedMutation,
} from "./generated/graphql";
import { TokenContext } from "./context/TokenContext";
import { Todo } from "./entities/todo";
import {
  useCreateTodo,
  useDeleteTodo,
  useMarkTodoCompleted,
  useMarkTodoUncompleted,
} from "./customHooks/graphqlHooks/HomeHooks";

const { Header, Content } = Layout;

const Home = () => {
  const { loginToken, updateLoginToken } = useContext(TokenContext);
  const token = loginToken;
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
    refetch,
  } = useListTodosQuery({
    context: {
      headers: {
        authorization: token,
      },
    },
    onCompleted: (data) => {
      message.success("Records have been listed!");
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const [createTodoMutation] = useCreateTodo({
    refetch,
    token,
    setIsModalVisible,
  });
  const [markTodoCompletedMutation] = useMarkTodoCompleted({ token, refetch });

  const [markTodoUncompletedMutation] = useMarkTodoUncompleted({
    token,
    refetch,
  });

  const [deleteTodoMutation, deleteData, deleteLoading, deleteError] =
    useDeleteTodo({ token, refetch });

  const handleCompleted = (record: Todo, status: boolean) => {
    if (status) {
      markTodoCompletedMutation({
        variables: { markTodoCompletedId: record.id },
      });
    } else {
      markTodoUncompletedMutation({
        variables: { markTodoUncompletedId: record.id },
      });
    }
  };

  const handleDelete = (id: string) => {
    deleteTodoMutation({ variables: { deleteTodoId: id } });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values: Todo) => {
    createTodoMutation({ variables: { title: values.title } });
  };
  const columns = [
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
      render: (_: any, record: Todo) => (
        <Checkbox
          value={record.completed}
          checked={record.completed}
          onChange={(data) => handleCompleted(record, data.target.checked)}
          className="completed-checkbox"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Delete",
      dataIndex: "id",
      key: "id",
      render: (id: string) => (
        <Button
          type="link"
          onClick={() => handleDelete(id)}
          className="delete-btn"
        >
          Delete
        </Button>
      ),
    },
  ];

  if (listLoading) return <p>Loading...</p>;
  if (listError) return <p>Error :(</p>;

  const dataSource = listData?.listTodos
    .map((todo: Todo) => ({
      ...todo,
      key: todo.id,
    }))
    .sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
        <PlusOutlined /> Add Todo
      </Button>
      <Table
        className="table"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="id"
      />
      <Modal
        title="Create Todo"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleSubmit} className="form">
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input placeholder="Enter a new Todo" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Home;
