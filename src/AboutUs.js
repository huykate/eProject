import './AboutUs.css';
function AboutUs(){
    
    return(
        <>  
            <div className='Title grid'>
                <div className='Title__top'>WE ARE</div>
                <div className='Title__bottom'> CLARINS</div>
                <div className='Bio'>
                    <div className='Bio__text'>In 2024, Clarins celebrates 70 years of groundbreaking French beauty, featuring formulas powered by nature's most effective ingredients.</div>
                    <div className='Bio__text'>From generation to generation, our iconic products have adorned dressing tables and bathroom vanities around the world.</div>
                    <div className='Bio__text'><b>Here's to seven decades of beautiful innovation, beautiful sharing, and beautiful engagement.</b></div>
                </div>  
            </div> 
                <div className='Title__secondary'>
                    <div className='Title__secondary--text'> From our iconic products to the Clarins Institute, discover what has made us unique for the past seventy years</div>
                </div>
            <div className='Card'>
                <div className='Card__detail grid'>
                    <img className='Card__img ismg-fluid' src = {process.env.PUBLIC_URL + '../img/Banner-hero img/christina.jpg'} alt=''></img>
                    <div className='Card__text'>
                        <div className='Card__text--service'>Manager</div>
                        <p>You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.</p>
                        <h2 className='Card__Text--name'>
                            - Christina Sylvan -
                        </h2>
                    </div> 
                </div>
            </div>
            <div className='Card--2'>
                <div className='Card__detail grid'>
                    <div className='Card__text'>
                        <div className='Card__text--service'>CEO</div>
                        <p>Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.</p>
                        <h2 className='Card__Text--name'>
                            - Coy Jason  -
                        </h2>  
                    </div> 
                    <img className='Card__img--2 ismg-fluid' src = {process.env.PUBLIC_URL + '../img/Banner-hero img/ali.jpg'} alt=''></img>
                </div>
            </div>
            <div className='Card'>
                <div className='Card__detail grid'>
                    <img className='Card__img ismg-fluid' src = {process.env.PUBLIC_URL + '../img/Banner-hero img/Wendi Monna.jpg'} alt=''></img>
                    <div className='Card__text'>
                        <div className='Card__text--service'>Founder</div>
                        <p>The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.</p>
                        <h2 className='Card__Text--name'>
                            - Wendi Monna -
                        </h2>
                    </div> 
                </div>
            </div>
        </>
    )
   
}

export default AboutUs;