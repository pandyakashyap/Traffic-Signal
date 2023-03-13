import React, { useEffect, useState } from "react";

function Traffic() {

    const [signal1,setsignle1] = useState("red");
    const [signal2,setsignle2] = useState("red");


    const green = document.getElementById("green");
    const yellow = document.getElementById("yellow");
    const red = document.getElementById("red");


    //For 2nd traffice :-
    const Grn = document.getElementById("green12");
    const rd = document.getElementById("red12");
    const ylo = document.getElementById('yellow12');

    
    useEffect(() => {
        if(green && red && yellow){
            Green();

            YLO();
            RD();
            GRN();
        }

        
        const time1 = setTimeout(() => {
            if(signal1 === "green")
            {
                setsignle1("yellow");
                setTimeout(() => setsignle1("red"),20000);
            }
            else if(signal1 ==="yellow")
            {
                setsignle1("red");
                setTimeout(() => setsignle1("green"),15000);
            }
            else
            {
                setsignle1("green");
                setTimeout(() => setsignle1("yellow"),8000);
            }
        } ,[signal1,setsignle1]);


        const time2 = setTimeout(() => {
            if(signal2 === "green")
            {
                setsignle2("yellow");
                setTimeout(() => setsignle2("red"),20000);
            }
            else if(signal2 === "yellow")
            {
                  setsignle2("red");
                setTimeout(() => setsignle2("green"), 15000);
            }
            else 
            {
                setsignle2("green");
                setTimeout(() => setsignle2("yellow"),8000);
            }
        })
    }, [signal2,setsignle2]);

    // return () => {
    //     clearTimeout(time1);
    //     clearTimeout(time2);
    // };
    // }, [signal1, signal2]);

    
    // For 1st traffic :-
    function Green() {
        green.style.backgroundColor = "green";
        setTimeout(Yellow, 20000);
        red.style.backgroundColor = "black";
    }

    function Yellow() {
        yellow.style.backgroundColor = "yellow";
        green.style.backgroundColor = "black";
        setTimeout(Red, 10000);
    }

    function Red() {
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "black";
        setTimeout(Green, 30000);
    }


    //For 2nd Traffic :-
    function GRN()
    {
        Grn.style.backgroundColor ="green";
        ylo.style.backgroundColor="black";
        setTimeout(rd,10000);
    }

    function RD()
    {
        rd.style.backgroundColor ="red";
        Grn.style.backgroundColor="black";
        setTimeout(ylo,8000);
    }

    function YLO()
    {
        ylo.style.backgroundColor="yellow";
        rd.style.backgroundColor= "black";
        setTimeout(Grn,5000);
    }


    return (
        <div>
            <div id="traffic">
                <div id="green"></div>
                <div id="yellow"></div>
                <div id="red"></div>
            </div>

            <div id="traffic1">
                <div id="green12"></div>
                <div id="yellow12"></div>
                <div id="red12"></div>
            </div>

            <div id="traffic12">
                <div id="green"></div>
                <div id="yellow"></div>
                <div id="red"></div>
            </div>
        </div>
    );
}

export default Traffic;
