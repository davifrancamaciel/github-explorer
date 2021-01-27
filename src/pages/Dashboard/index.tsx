import React, { useState, FormEvent, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../servies/api";

import { Title, Form, Repositories, Error } from "./styles";
import logo from "../../assets/logo.svg";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositorioes = localStorage.getItem(
      "@githubExplorer:repositorios"
    );
    if (storageRepositorioes) {
      return JSON.parse(storageRepositorioes);
    } else {
      return [];
    }
  });
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "@githubExplorer:repositorios",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError("Digite o auto/nome do repositório");
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      console.log(response.data);
      setNewRepo("");
      setInputError("");
    } catch (error) {
      setInputError("Erro na busca do repositório");
    }
  }

  return (
    <div>
      <img src={logo} alt="Github Esplorer" />
      <Title> Explore repositorios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((item) => (
          <Link key={item.full_name} to={`repository/${item.full_name}`}>
            <img src={item.owner.avatar_url} alt={item.full_name} />
            <div>
              <strong>{item.full_name}</strong>
              <p>{item.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </div>
  );
};

export default Dashboard;
