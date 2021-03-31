import React from 'react';

import '../styles/pages/Pay.css';

function Pay() {
    return (
        <>
        <div className="page-container">

            <div className="cross"></div>

            <div className="titles">
                Dados do Aluno Beneficiado
            </div>
            
            <div className="board">
                <p>Marcus Vinícius Pereira e Sousa</p>
                <p>3ª Série do Ensino Fundamental</p>
                <div className="bold"><p>R$ 250,57</p></div>
            </div>

            <div className="titles">
                Dados do Financeiros
            </div>

            <div className="board">
                <p>Você está ciente que 5% do valor doado  será destinado para manter os custos da EQUIPA OS GURI</p>
            </div>

            <div className="board">
                <div className="pay-method">
                    <input type="radio" id="creditCard" name="pay_method" value="creditCard"/>
                    <label>Cartão de Crédito</label>
                    <div className="icon"></div><br/>
                </div>
                <div className="pay-method">
                    <input type="radio" id="bill" name="pay_method" value="bill" disabled/>
                    <label>Boleto Bancário</label>
                    <div className="icon"></div><br/><br/>
                </div>
                <div className="pay-method">
                    <input type="radio" id="pix" name="pay_method" value="pix"/>
                    <label>PIX</label>
                    <div className="icon"></div><br/><br/>
                </div>
            </div>

            <div className="board">
               <p>Total:</p>
               <div className="bold"><p>R$ 263,09 (250,57 + 12,52 )</p></div>
            </div>  

            <button>Efetuar Pagamento</button>
        </div>
        </>
    );
}

export default Pay;