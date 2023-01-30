console.log('script is running');

const consequences = [
    "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
]



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

    $('#date').val("");
    $('#time').val("");
    $('#studentName').val("");
    $('#grade').val("");
    $('#staffName').val("");
    $('input:radio[name=majorMinor]:checked').prop('checked', false);//
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
    $('#locationOfI').val("");

}

$('#consequence1').autocomplete({source: consequences});
$('#consequence2').autocomplete({source: consequences});
$('#consequence3').autocomplete({source: consequences});
$('#consequence4').autocomplete({source: consequences});
$('#consequence5').autocomplete({source: consequences});

$('#behavior-form').on("submit", formSubmitHandler);