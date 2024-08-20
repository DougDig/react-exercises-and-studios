export default function HobbyLinks (){
    let hobbyLinks = ["https://mdc.mo.gov/fishing","https://my.clevelandclinic.org/health/body/12148-sleep-basics"];
    return (
        <div>
            <a href= {hobbyLinks[0]}> Fishing</a>;
            <a href= {hobbyLinks[1]}> Sleeping</a>;
        </div>
    );
}