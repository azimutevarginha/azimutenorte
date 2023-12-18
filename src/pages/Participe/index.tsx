import * as S from './styles'
import Camiseta from "../../img/camiseta.png"
import Voluntaria from "../../img/voluntaria.png"
import Corredores from "../../img/corredores.png"
import Ideia from "../../img/ideia.png"

export function Part() {

    return (
        <>
            <S.Main>

                <S.Top data-aos="Anima">
                    <li>
                        <div id="Titulo" data-aos="Esquerda">
                            <h1>Venha participar do nosso projeto!</h1>
                            <h2>Há várias maneiras de contribuir para o pojeto, você pode escolher a mais viável para você ou para sua empresa! Confira as opções abaixo.</h2>
                        </div>
                    </li>
                    <li>
                        <img src={Ideia} alt="Dupla tendo uma boa ideia [Ilustração]" data-aos="Direita"/>
                    </li>
                </S.Top>

                <S.Participe>
                    <S.Patrocinio data-aos="Part">
                        <div data-aos="Esquerda">
                            <h3 id="Nome">Patrocínio</h3>
                            <p>Você terá a oportunidade de divulgar sua marca estampando sua logo nos uniformes de nossos orientistas e/ou deixá-la à mostra no rodapé do site!</p>
                            <img src={Camiseta} alt="Uniforme com sua logo estampada [Ilustração]" />
                        </div>
                    </S.Patrocinio>

                    <S.Voluntario data-aos="Part">
                        <div data-aos="Direita">
                            <h3 id="Nome">Voluntário</h3>
                            <p>Você poderá nos ajudar trabalhando voluntariamente na organização das corridas, montagem da pista ou com o que preferir e sobuber fazer!</p>
                            <img src={Voluntaria} alt="Voluntária do projeto montando a pista [Ilustração]" />
                        </div>
                    </S.Voluntario>

                    <S.Corrida data-aos="Part">
                        <div data-aos="Esquerda">
                            <h3 id="Nome">Corrida</h3>
                            <p>Se você gostou do esporte e quer participar das corridas, então junte-se a nós para ter benefícios como transporte, estadia e auxílios.</p>
                            <img src={Corredores} alt="Uniforme com sua logo estampada [Ilustração]" />
                        </div>
                    </S.Corrida>
                </S.Participe>

            </S.Main>
        </>
    )
}