import styles from './FormsF.module.css';
import Button from '../Button/Button.jsx';
import axios from 'axios';
import { useState } from 'react';

const FormsF = () => {
    const [Nomef, setNomef] = useState("");
    const [Empresa, setEmpresa] = useState("");
    const [Cnpj, setCnpj] = useState("");
    const [Enderecof, setEnderecof] = useState("");
    const [Emailf, setEmailf] = useState("");
    const [Telf, setTelf] = useState("");
    const [statusCnpj, setStatusCnpj] = useState("");
    const [statusEmailf, setStatusEmailf] = useState("");
    const [CnpjValid, setCnpjValid] = useState(false);
    const [EmailValid, setEmailValid] = useState(false);

    const clearForm = () => {
        setNomef("");
        setEmpresa("");
        setCnpj("");
        setEnderecof("");
        setEmailf("");
        setTelf("");
        setStatusCnpj("");
        setStatusEmailf("");
        setCnpjValid(false);
        setEmailValid(false);
    };

    const limpar = (e) => {
        e.preventDefault();
        clearForm()
    };

    const AlertC = () => {
        alert(`Cadastro finalizado com sucesso! Seja bem vindo(a) ${Nomef}`);
    };

    const validDigits = (text) => text.replace(/[^0-9,]/g, "");

    const complete = () => {
        if (!Nomef || !Empresa || !Cnpj || !Enderecof || !Emailf || !Telf) {
            alert("Por favor, preencha todos os campos para concluir o cadastro!");
            return false;
        } else {
            return true;
        }
    };

    const validEmpresa = () => {
        if (Empresa !== "MEI" && Empresa !== "LTDA" && Empresa !== "SS" && Empresa !== "SA") {
            alert("Tipo de empresa inválido! Permitido somente: MEI, LTDA, SS ou SA.");
            return false;
        }
        return true;
    };

    const validCnpj = async (cnpj) => {
        try {
            let url = "https://api.invertexto.com/v1/validator?token=15774|Ebio7yUqz8dWOwh9j0ob3kYSKjfAU1D9&value=";
            url = url.concat(cnpj);
            const response = await axios.get(url);
            console.log(response);

            if (response.data.valid) {
                setStatusCnpj("");
                return true;
            } else {
                setCnpjValid(false);
                setStatusCnpj("CNPJ INVÁLIDO!");
                alert("CNPJ INVÁLIDO!");
                return false;
            }
        } catch (error) {
            console.log(error);
            setCnpjValid(false);
            setStatusCnpj("Erro ao validar CNPJ!");
            return false;
        }
    };

    const validEmail = async (Emailf) => {
        try {
            const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}/g;
            if (regex.test(Emailf)) {
                setStatusEmailf("");
                return true;
            } else {
                setEmailValid(false);
                alert("E-MAIL INVÁLIDO!");
                setStatusEmailf("E-MAIL INVÁLIDO");
                return false;
            }
        } catch (error) {
            console.log(error);
            setEmailValid(false);
            setStatusEmailf("Erro ao validar E-Mail!");
            return false;
        }
    };

    const enviar = async (e) => {
        e.preventDefault();
        if (!complete()) {
            return;
        }

        if (!validEmpresa()) {
            return;
        }

        const isCnpjValid = await validCnpj(Cnpj);
        const isEmailValid = await validEmail(Emailf);

        if (isCnpjValid && isEmailValid) {
            AlertC();
            clearForm();
        } else {
            alert("Houve um erro na validação de algum componente, tente novamente.");
        }
    };

    return (
        <div className={styles.container}>
            <div id='forn-container'>
                <h2>Cadastro de Fornecedor</h2>
                <form id='forn-form'>
                    <div className='forms-inputs'>
                        <div className='forms-control'>
                            <label htmlFor='Nomef'>Nome:</label>
                            <input
                                type="text" name='Nomef' id='Nomef' placeholder='Insira seu nome...'
                                value={Nomef} onChange={(e) => setNomef(e.target.value)}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Empresa'>Tipo de empresa:</label>
                            <input
                                type="text" name='Empresa' id='Empresa' placeholder='Exemplo: MEI, LTDA, SS, SA'
                                value={Empresa} onChange={(e) => setEmpresa(e.target.value)}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Cnpj'>CNPJ:</label>
                            <input
                                type="text" name='Cnpj' id='Cnpj' placeholder='Insira sua CNPJ...'
                                value={Cnpj} onChange={(e) => setCnpj(validDigits(e.target.value))}
                            />
                            {!CnpjValid && <p>{statusCnpj}</p>}
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Enderecof'>Endereço:</label>
                            <input
                                type="text" name='Enderecof' id='Enderecof' placeholder='Insira seu endereço...'
                                value={Enderecof} onChange={(e) => setEnderecof(e.target.value)}
                            />
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Emailf'>E-Mail:</label>
                            <input
                                type="text" name='Emailf' id='Emailf' placeholder='Insira seu E-Mail...'
                                value={Emailf} onChange={(e) => setEmailf(e.target.value)}
                            />
                            {!EmailValid && <p>{statusEmailf}</p>}
                        </div>
                        <div className='forms-control'>
                            <label htmlFor='Telf'>Telefone/Celular:</label>
                            <input
                                type="text" name='Telf' id='Telf' placeholder='Insira seu Telefone/Celular...'
                                value={Telf} onChange={(e) => setTelf(validDigits(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='action-control'>
                        <Button id="cadastrar-btn" text="Cadastrar" onClick={enviar}  />
                        <Button id="clear-btn" text="Limpar" onClick={limpar}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormsF;
