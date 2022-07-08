import * as S from "./styles"
import { biscrab } from "../../assets/images/developers"
import { code } from "../../assets/images/icons"

const Develpoers = () => {
    return(
        <S.Body>
            <S.Major>
                <S.MajorTitle><img src={code}/>FrontEnd</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img src={biscrab}/>
                        <S.Info>
                            <S.Name>이상운</S.Name>
                            <S.Email><b>Email:</b> biscrab@naver.com</S.Email>
                            <S.GitHub href="https://github.com/biscrab"><b>GitHub:</b> https://github.com/biscrab</S.GitHub>
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>이진형</S.Name>
                            <S.Email><b>Email:</b> winhave@naver.com</S.Email>
                            <S.GitHub href="https://github.com/Sonnehilda"><b>GitHub:</b> https://github.com/Sonnehilda</S.GitHub>                     
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>박상민</S.Name>
                            <S.Email><b>Email:</b> smp051215@gmail.com</S.Email>
                            <S.GitHub href="https://github.com/smp6340"><b>GitHub:</b> https://github.com/smp6340</S.GitHub>                       
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
            <S.Major>
                <S.MajorTitle><img src={code}/>BackEnd</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>최희</S.Name>
                            <S.Email><b>Email:</b> cmlgml094356@gmail.com</S.Email>
                            <S.GitHub href="https://github.com/chlgml"><b>GitHub:</b> https://github.com/chlgml</S.GitHub>            
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>박상진</S.Name>
                            <S.Email><b>Email:</b> sangjin170202@naver.com</S.Email>
                            <S.GitHub href="https://github.com/skmn3"><b>GitHub:</b> https://github.com/skmn3</S.GitHub>    
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
            <S.Major>
                <S.MajorTitle><img src={code}/>Android</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img src={biscrab}/>
                        <S.Info>
                            <S.Name>이상운</S.Name>
                            <S.Email><b>Email:</b> biscrab@naver.com</S.Email>
                            <S.GitHub href="https://github.com/biscrab"><b>GitHub:</b> https://github.com/biscrab</S.GitHub>    
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
            <S.Major>
                <S.MajorTitle><img src={code}/>Design</S.MajorTitle>
                <S.MajorDiv>
                    <S.Developer>
                        <img src={biscrab}/>
                        <S.Info>
                            <S.Name>이상운</S.Name>
                            <S.Email><b>Email:</b> biscrab@naver.com</S.Email>
                            <S.GitHub href="https://github.com/biscrab"><b>GitHub:</b> https://github.com/biscrab</S.GitHub>    
                        </S.Info>
                    </S.Developer>
                    <S.Developer>
                        <img />
                        <S.Info>
                            <S.Name>이진형</S.Name>
                            <S.Email><b>Email:</b> winhave@naver.com</S.Email>
                            <S.GitHub href="https://github.com/Sonnehilda"><b>GitHub:</b> https://github.com/Sonnehilda</S.GitHub>  
                        </S.Info>
                    </S.Developer>
                </S.MajorDiv>
            </S.Major>
        </S.Body>
    )
}

export default Develpoers