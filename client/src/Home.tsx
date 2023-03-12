// import { useQuery } from '@apollo/client';
import { List, Typography } from "antd";
// import { LIST_TODOS } from './graphql';

const { Title } = Typography;

const Home = () => {
  //   const { loading, error, data } = useQuery(LIST_TODOS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // const todos = data.listTodos;

  return (
    <>
      <Title level={2}>Todo List</Title>
      {/* <List
        dataSource={todos}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      /> */}
    </>
  );
};

export default Home;
