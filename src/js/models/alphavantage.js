// url = https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=XYAY0DIIOBBWZVFL&symbol=

function AlphaVantageModel(){

    //assign each separate part of the URL to a property
    
    this.apiBaseURL = 'https://www.alphavantage.co/query';

    //function value
    this.function = 'GLOBAL_QUOTE';

    //api key
    this.key = 'XYAY0DIIOBBWZVFL';

    //create the proper query URL
    this.search = async function (symbol){
        //append the ? to the URL
        let url = new URL(this.apiBaseURL + '?');

        //set the values for the function, key, and symbol in the query
        const params = new URLSearchParams();
        params.set('function', this.function);
        params.set('apikey', this.key);
        params.set('symbol', symbol)
        url = url+params;
        
        //retrieve the info
        const req = await fetch(url);
        const res = await req.json();

        //return the Global Quote object in the object
        return res["Global Quote"];

    }

    return this;

}

export default AlphaVantageModel;