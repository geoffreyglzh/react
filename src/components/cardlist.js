import React from 'react';
import Card from './card';


function Cardlist() {
    return (
        <div>
            <h1>I will contain deck of cards!</h1>
            <Card title="Samsung" likes="8" dislikes="5"></Card>
            <Card title="Huawei" likes="18" dislikes="0"></Card>
            <Card title="Nokia" likes="80" dislikes="0"></Card>
            <Card title="Micromax" likes="81" dislikes="0"></Card>
            <Card title="Digi" likes="31" dislikes="0"></Card>
            <Card title="Maxis" likes="41" dislikes="0"></Card>
            <Card title="LG" likes="121" dislikes="0"></Card>
            <Card title="Apple" likes="2" dislikes="0"></Card>
        </div>
      );
}

export default Cardlist;