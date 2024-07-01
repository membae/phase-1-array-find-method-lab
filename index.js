// code your solution here
function superbowlWin(records){
    const winrecord=records.find(record=>record.result==="W");
    return winrecord?winrecord.year:undefined;
}
    const array=[
        {
            year:"2015",result:"W"
        },
        {
            year:"2014",result:"N/A"
        },
        {
            year:"2012",result:"L"
        }
    ];
    console.log(superbowlWin(array));
