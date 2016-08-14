import Ember from 'ember';

export default Ember.Component.extend({
  properties: Ember.computed('data', function() {
    let props = [];
    let data = {};
    if (this.get('data')[0]) {
      data = this.get('data')[0];
    }
    Object.keys(data).forEach(function(key){
      props.push(key);
    });
    return props;
  }),

  scope: Ember.computed('query', function(){
    let scope = $('#scope').find('button').html();
    return scope;
  }),

  values: Ember.computed('data', function(){
    Ember.Logger.debug(this.get('data'));
    let data = this.get('data');
    return data.map(d => {
      return {
        name: d.appointment.patient.first_name,
        date: new Date(d.appointment.start_time),
        age: getAge(d.appointment.patient.date_of_birth),
        balance: "$100",
        status: d.appointment.appointment_status.name
      };
    });
  })
});

function getDay(date) {
  let today = new Date(date);
  return today.getMonth() + today.getDay() + today.getYear();
}


function getAge(birthday) {
   var today = new Date();
    birthday = new Date(birthday);
   var thisYear = 0;
   if (today.getMonth() < birthday.getMonth()) {
       thisYear = 1;
   } else if ((today.getMonth() === birthday.getMonth()) && today.getDate() < birthday.getDate()) {
       thisYear = 1;
   }
   var age = today.getFullYear() - birthday.getFullYear() - thisYear;
   return age;
}
