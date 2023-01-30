console.log('script is running');


const copyText = (text) => {
    navigator.clipboard.writeText(text);
}

const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    date = $('#date').val();
    time = $('#time').val();
    studentName = $('#studentName').val();
    grade = $('#grade').val();
    staffName = $('#staffName').val();
    majorMinor = $('#majorMinor').val();//
    offence = $('#offence').val();
    consequence1 = $('#consequence1').val();
    consequence2 = $('#consequence2').val();
    consequence3 = $('#consequence3').val();
    consequence4 = $('#consequence4').val();
    consequence5 = $('#consequence5').val();
    locationOfI = $('#locationOfI').val();
    motivation = $('#motivation').val();
    others = $('#others').val();
    hateSymbol = $('#hateSymbol').val();
    notes = $('#notes').val();
    let sheet = ''
    if (majorMinor === 'Major') {
        sheet = `${date} ${time}	${studentName}	${staffName}		${offence}	${`${consequence1} ${consequence2} ${consequence3} ${consequence4} ${consequence5}`}	${notes}`;
    }
    else {
        sheet = `${date} ${time}	${studentName}	${staffName}	${offence}		${`${consequence1} ${consequence2} ${consequence3} ${consequence4} ${consequence5}`}	${notes}`;
    }
    let swiss = `
document.getElementById("Swis-Referral-ReferralTypeField-input").value = "${majorMinor}";
document.getElementById("Swis-Referral-StudentField-input").value = "${studentName}";
document.getElementById("Swis-Referral-GradeField-input").value = "${grade}";
document.getElementById("Swis-Referral-EducatorField-input").value = "${staffName}";
document.getElementById("Swis-Referral-DateField-input").value = "${date}";
document.getElementById("Swis-Referral-TimeField-input").value = "${time}";
document.getElementById("Swis-Referral-LocationField-input").value = "${locationOfI}";
document.getElementById("Swis-Referral-ProblemBehaviorField-0-input").value = "${offence}";
document.getElementById("Swis-Referral-MotivationField-input").value = "${motivation}";
document.getElementById("Swis-Referral-OthersInvolvedField-input").value = "${others}";
document.getElementById("Swis-Referral-ActionTakenField-0-input").value = "${consequence1}";
document.getElementById("Swis-Referral-ActionTakenField-1-input").value = "${consequence2}";
document.getElementById("Swis-Referral-ActionTakenField-2-input").value = "${consequence3}";
document.getElementById("Swis-Referral-ActionTakenField-3-input").value = "${consequence4}";
document.getElementById("Swis-Referral-ActionTakenField-4-input").value = "${consequence5}";
document.getElementById("Swis-Referral-NotesField-input").value = "${notes}";
document.getElementById("Swis-Referral-CustomField-90331-input").value = "${hateSymbol}"; 
    `;

    console.log(sheet);
    console.log(swiss);

    $('#referral-list').append(`
<li> 
<button onclick="copyText(${sheet})">Copy Sheet Info for ${studentName}</button>
<button onclick="copyText(${swiss})">Copy Swiss Info for ${studentName}</button>
</li>
    
    `)

    $('#date').val("");
    $('#time').val("");
    $('#studentName').val("");
    $('#grade').val("");
    $('#staffName').val("");
    $('#majorMinor').val("Major")
    $('#offence').val("");
    $('#consequence1').val("");
    $('#consequence2').val("");
    $('#consequence3').val("");
    $('#consequence4').val("");
    $('#consequence5').val("");
    $('#motivation').val("");
    $('#others').val("");
    $('#hateSymbol').val("No");
    $('#notes').val("");
    $('#locationOfI').val("");

}

//Autocomplete
$('.consequence-list').autocomplete({source: consequences});
$('#staffName').autocomplete({source: staffNames});
$('#offence').autocomplete({source: offences});
$("#locationOfI").autocomplete({source: locations});


$('#behavior-form').on("submit", formSubmitHandler);