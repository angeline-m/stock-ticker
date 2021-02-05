// url = https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=XYAY0DIIOBBWZVFL&symbol=

function AlphaVantageModel(){
    this.apiBaseUrl = 'https://www.alphavantage.co/query';
    this.function = 'GLOBAL_QUOTE';
    this.key = 'XYAY0DIIOBBWZVFL';

     /* this.query = async function (url) {
        const req = await fetch(url);
        const res = await req.json();
        return res;
    } */

    this.search = async function (symbol){
        let url = new URL(this.apiBaseURL + '?');
        const params = new URLSearchParams();
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