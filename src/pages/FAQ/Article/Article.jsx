import './ArticleStyle.scss';

function Article(){
    return(
        <div className={"containerArt"}>
            <h1>Dlaczego warto śledzić swoje nawyki?</h1>
                <div className={"articles"}>
                    <h3>1. Motywacja</h3>
                    <p>Po upływie jakiegoś odcinku czasu można zobaczyć swój postęp, który będzie dobrą motywacją dziłać dalej.</p>
                    <h3>2. Analiza</h3>
                    <p>Jeżeli otrzymany resultat nie jest zadowolający, można łatwo zobaczyć co nie udało się i poprawić
                        swoje następne kroki.</p>
                    <h3>3. Automatyczność</h3>
                    <p>Wprowadzenie nowego nawyku w życie oznacza doprowadzenie wykonywania jakiejś czynności do automatyzmu,
                        śledząc nawyki codziennie można ułatwić to zadanie.</p>
                </div>
            </div>
    );
}

export default Article;