// url = https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=XYAY0DIIOBBWZVFL&symbol=

function AlphaVantageModel(){

    //assign each separate part of the URL to a property
    this.apiBaseUrl = 'https://www.alphavantage.co/query';

    //function value
    this.function = 'GLOBAL_QUOTE';

    //api key
    this.key = 'XYAY0DIIOBBWZVFL';

     /* this.query = async function (url) {
        const req = await fetch(url);
        const res = await req.json();
        return res;
    } */

    //create the proper query URL
    this.search = async function (symbol){
        //append the ? to the URL
        let url = new URL(this.apiBaseURL + '?');
        const params = new URLSearchParams();
        
        //set the values for the function, key, and symbol in the query
        params.set('function', this.function);
        params.set('key', this.key);
        params.set('symbol', symbol)
        url = url+params;
        
        const req = await fetch(url);
        const res = await req.json();
        return res["Global Quote"];
    }

    return this;

}

export default AlphaVantageModel;