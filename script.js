
        function cleaerError() {
            errors = document.getElementsByClassName('formerror');
            for (let item of errors) {
                item.innerHTML = "";
            }
        }

        function seterror(id, error) {
            //set error inside tag of id

            element = document.getElementById(id);
            element.getElementsByClassName('formerror')[0].innerHTML = error;
        };

        function validateForm() {
            var returnval = true;
            cleaerError();

            //perform validation and if validation fails , set the value of return to false

            //for name 

            var name = document.forms['myForm']["fname"].value;
            if (name.length < 5) {
                seterror(`name`, `*Length of name is too short`);
                returnval = false;
            }

            if (name.length == 0) {
                seterror(`name`, `*Length of name can not be Zero`);
                returnval = false;
            }

            //for email

            var email = document.forms['myForm']['femail'].value;
            if (email.length > 35) {
                seterror(`email`, `*Email length is too long`);
                returnval = false;
            }

            //phone

            var phone = document.forms['myForm']['fphone'].value;
            if (phone.length != 10) {
                seterror(`phone`, `*Phone Number should be 10 digit`);
                returnval = false;
            }

            //password

            var passw = document.forms['myForm']['fpass'].value;
            if (passw.length < 7) {
                seterror(`pass`, `*Length of Passward should be 8 char `);
                returnval = false;
            }

            //  confirmpassword

            var cpassw = document.forms['myForm']['fcpass'].value;
            if (cpassw != passw) {
                seterror(`cpass`, `*Passward not matched `);
                returnval = false;
            }





            return returnval;
        }