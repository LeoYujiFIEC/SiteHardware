import styles from './FormsC.module.css';
import Button from '../Button/Button.jsx';
import axios from 'axios';
import { useState } from 'react';

const FormsC = () => {

    const [Nomec, setNomec] = useState("");
    const [Sobrenome, setSobrenome] = useState("");
    const [Idade, setIdade] = useState("");
    const [Cpf, setCpf] = useState("");
    const [Enderecoc, setEnderecoc] = useState("");
    const [Emailc, setEmailc] = useState("");
    const [Telc, setTelc] = useState("");
    const [statusCpf, setStatusCpf] = useState("");
    const [statusEmailc, setStatusEmailc] = useState("");
    const [CpfValid, setCpfValid] = useState(false);
    const [EmailValid, setEmailValid] = useState(false);


    const clearForm = (e) => {
        setNomec("");
        setSobrenome("");
        setIdade("");
        setCpf("");
        setEnderecoc("");
        setEmailc("");
        setTelc("");
        setStatusCpf("");
        setStatusEmailc("");
        setCpfValid(false);
        setEmailValid(false);
    };

    const limpar = (e) => {
        e.preventDefault();
        clearForm()
    };

    const AlertC = (e) => {
        alert(`Cadastro finalizado com sucesso! Seja bem vindo(a) ${Nomec} `);
    };

    const complete = () => {
        if (!Nomec || !Sobrenome || !Idade || !Cpf || !Enderecoc || !Emailc || !Telc) {
            alert("Por favor, preencha todos os campos para concluir o cadastro!");
            return false;
        } else {
            return true;
        }
    }

    const validDigits = (text) => text.replace(/[^0-9,]/g, "");

    const validCpf = async (cpf) => {
        try {
            let url = "https://api.invertexto.com/v1/validator?token=15774|Ebio7yUqz8dWOwh9j0ob3kYSKjfAU1D9&value=";
            url = url.concat(cpf);
            const response = await axios.get(url);

            console.log(response);

            if (response.data.valid) {
                setStatusCpf("");
                return true;
            } else {
                setCpfValid(false);
                setStatusCpf("CPF INVÁLIDO!");
                alert("CPF INVÁLIDO!");
                return false;
            }
        } catch (error) {
            console.log(error);
            setCpfValid(false);
            setStatusCpf("Erro ao validar CPF!");
            return false;
        }
    };

    const validEmail = async (Emailc) => {
        try {
            const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}/g;
            if (regex.test(Emailc)) {
                setStatusEmailc("");
                return true;
            } else {
                setEmailValid(false);
                alert("E-MAIL INVÁLIDO!");
                return false;
            }
        } catch (error) {
            console.log(error);
            setEmailValid(false);
            setStatusEmailc("Erro ao validar E-Mail!");
            return false;
        }
    };

    const enviar = async (e) => {
        e.preventDefault();
        if (!complete()) {
            return;
        }
        const isCpfValid = await validCpf(Cpf);
        const isEmailValid = await validEmail(Emailc);

        if (isCpfValid && isEmailValid) {
            AlertC();
            clearForm();
        } else {
            alert("Houve um erro na validação de algum componente, tente novamente.");
        }
    };

    return (
        <div className={styles.container}>
            <div id='cliente-container'>
                <h2>Cadastro de Cliente</h2>
                <form id='cli-form' >
                    <div className='forms-inputs'>
                        <div className='forms-control'>
                            <label htmlFor='Nomec'>Nome:</label>
                            <input
                                type="text" name='Nomec' id='Nomec' placeholder='Insira seu nome...'
                                value={Nomec} onChange={(e) => setNomec(e.target.value)}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Sobrenome'>Sobrenome:</label>
                            <input
                                type="text" name='Sobrenome' id='Sobrenome' placeholder='Insira seu sobrenome...'
                                value={Sobrenome} onChange={(e) => setSobrenome(e.target.value)}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Idade'>Idade:</label>
                            <input
                                type="text" name='Idade' id='Idade' placeholder='Insira sua idade...'
                                value={Idade} onChange={(e) => setIdade(validDigits(e.target.value))}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Cpf'>CPF:</label>
                            <input
                                type="text" name='Cpf' id='Cpf' placeholder='Insira seu CPF...'
                                value={Cpf} onChange={(e) => setCpf(validDigits(e.target.value))}
                            />
                            {!CpfValid && <p>{statusCpf}</p>}
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Enderecoc'>Endereço:</label>
                            <input
                                type="text" name='Enderecoc' id='Enderecoc' placeholder='Insira seu endereço...'
                                value={Enderecoc} onChange={(e) => setEnderecoc(e.target.value)}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Emailc'>E-Mail:</label>
                            <input
                                type="text" name='Emailc' id='Emailc' placeholder='Insira seu E-Mail...'
                                value={Emailc} onChange={(e) => setEmailc(e.target.value)}
                            />
                            {!EmailValid && <p>{statusEmailc}</p>}
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Telc'>Telefone/Celular:</label>
                            <input
                                type="text" name='Telc' id='Telc' placeholder='Insira seu Telefone/Celular...'
                                value={Telc} onChange={(e) => setTelc(validDigits(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='action-control'>
                        <Button id="cadastrar-btn" text="Cadastrar" onClick={enviar} />
                        <Button id="clear-btn" text="Limpar" onClick={limpar} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormsC