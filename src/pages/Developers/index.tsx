import * as S from "./styles"
import { biscrab } from "../../assets/images/developers"

const Develpoers = () => {
    return(
        <S.Body>
            <S.Major>
                <S.MajorTitle>FrontEnd</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img src={biscrab}/>
                        <S.Info>
                            <S.Name>이상운</S.Name>
                            <S.Email>biscrab@naver.com</S.Email>
                            <S.GitHub>https://github.com/biscrab</S.GitHub>
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>이진형</S.Name>
                            <S.Email>winhave@naver.com</S.Email>
                            <S.GitHub>https://github.com/Sonnehilda</S.GitHub>                     
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>박상민</S.Name>
                            <S.Email>smp051215@gmail.com</S.Email>
                            <S.GitHub>https://github.com/smp6340</S.GitHub>                       
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
            <S.Major>
                <S.MajorTitle>BackEnd</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>최희</S.Name>
                            <S.Email>cmlgml094356@gmail.com</S.Email>
                            <S.GitHub>https://github.com/chlgml</S.GitHub>            
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>박상진</S.Name>
                            <S.Email>sangjin170202@naver.com</S.Email>
                            <S.GitHub>https://github.com/skmn3</S.GitHub>    
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
            <S.Major>
                <S.MajorTitle>Android</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img src={biscrab}/>
                        <S.Info>
                            <S.Name>이상운</S.Name>
                            <S.Email>biscrab@naver.com</S.Email>
                            <S.GitHub>https://github.com/biscrab</S.GitHub>    
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
            <S.Major>
                <S.MajorTitle>Design</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img src={biscrab}/>
                        <S.Info>
                            <S.Name>이상운</S.Name>
                            <S.Email>biscrab@naver.com</S.Email>
                            <S.GitHub>https://github.com/biscrab</S.GitHub>    
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>이진형</S.Name>
                            <S.Email>winhave@naver.com</S.Email>
                            <S.GitHub>https://github.com/Sonnehilda</S.GitHub>  
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
        </S.Body>
    )
}

export default Develpoers