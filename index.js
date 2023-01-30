console.log('script is running');

const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    date = $('#date').val();
    time = $('#time').val();
    studentName = $('#studentName').val();
    grade = $('#grade').val();
    staffName = $('#staffName').val();
    majorMinor = $('input:radio[name=majorMinor]:checked').val();//
    offence = $('#offence').val();
    consequence1 = $('#consequence1').val();
    consequence2 = $('#consequence2').val();
    consequence3 = $('#consequence3').val();
    consequence4 = $('#consequence4').val();
    consequence5 = $('#consequence5').val();
    motivation = $('#motivation').val();
    others = $('#others').val();
    hateSymbol = $('#hateSymbol').val();
    notes = $('#notes').val();
    let sheet = ''
    if (majorMinor === 'Major') {
        sheet = `${date} ${time}	${studentName}	${staffName}		${offence}	${`${consequence1} ${consequence2} ${consequence3} ${consequence4} ${consequence5}`}	${notes}`;
    }
    else
    {
        sheet = `${date} ${time}	${studentName}	${staffName}	${offence}		${`${consequence1} ${consequence2} ${consequence3} ${consequence4} ${consequence5}`}	${notes}`;
    }
    let swiss = "";
    
    console.log(sheet);

    $('#date').val("");
    $('#time').val("");
    $('#studentName').val("");
    $('#grade').val("");
    $('#staffName').val("");
    $('input:radio[name=majorMinor]:checked').prop('checked',false);//
    $('#offence').val("");
    $('#consequence1').val("");
    $('#consequence2').val("");
    $('#consequence3').val("");
    $('#consequence4').val("");
    $('#consequence5').val("");
    $('#motivation').val("");
    $('#others').val("");
    $('#hateSymbol').val("");
    $('#notes').val("");

}


$('#behavior-form').on("submit", formSubmitHandler);