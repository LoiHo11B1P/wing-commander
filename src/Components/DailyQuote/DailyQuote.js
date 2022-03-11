import { getAuthors, getQuoteData, getQuotes } from "../../features/quoteSlice";
import { useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from "react"
import { Card, Container, Button } from "react-bootstrap";
import "./DailyQuote.css"


const DailyQuote = () => {

    const dispatch = useDispatch();

    const quoteData = useSelector((state) => state.quote.quoteData )

    const quoteOption = useSelector((state) => state.quote.quoteOption )

    const [ currentIndex, setCurrentIndex ] = useState(3)

    useEffect(() => {

        dispatch(getQuoteData(quoteOption))
        
    }, [quoteOption, dispatch])

    const randomQuoteIndex = () => {

        if(quoteOption === 'quotes' && quoteData.length > 0) {

            const numberOfListEntries = quoteData.length-1;
            
            const randIndex = Math.floor(Math.random()*(numberOfListEntries - 0));
            
            setCurrentIndex(randIndex);

        }
    }

    const displayQuoteData = () => {
        if(quoteData.length > 0) {
            return (
                <figure >
                    <blockquote cite="https://type.fit/api/quotes" className="quote-paragraph"> 
                        <p>
                            {quoteData[currentIndex].text} 
                        </p>
                    </blockquote>
                    
                    <figcaption className="quote-paragraph-author">
                        by {quoteData[currentIndex].author !== ''?quoteData[0].author: 'Anomynous'}
                    </figcaption>      
                </figure>
            )
        }
    }

    return (
        <Container className="quote-container py-5 my-5">
            <Card className="my-5 py-5 px-5 transparent">
                <Card.Body className="transparent">
                    { displayQuoteData() }
                </Card.Body>
            </Card>
            <span className="quote-nav">             
                <Button 
                    className="mx-2" 
                    variant="primary" 
                    size="lg"
                    onClick={() =>setCurrentIndex(currentIndex-1)}
                    >Previous</Button>
                <Button 
                    className="mx-2" 
                    variant="primary" 
                    size="lg"
                    onClick={ () => randomQuoteIndex()}
                    >Random</Button>
                <Button 
                    className="mx-2" 
                    variant="primary" 
                    size="lg"
                    onClick={() =>setCurrentIndex(currentIndex+1)}
                    >Next</Button>
            </span>  
        </Container>   
   
    )
}

export default DailyQuote;