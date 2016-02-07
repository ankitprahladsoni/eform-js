module.exports = function(app) {

  app.factory('formService',  function(province) {

    var formServiceFactory = {};

    formServiceFactory.getPersonDetailForm = function() {
      return [{
          key: 'firstName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'First Name',
            placeholder: 'Enter your first name',
            required: true
          }
        }, {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Last Name',
            placeholder: 'Enter your last name',
            required: true
          }
        },

        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email',
            required: true
          }
        },

        {
          key: 'dateOfBirth',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Date of birth',
            placeholder: 'date of birth ',
            required: true
          }
        },

        {
          key: 'height',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Height',
            placeholder: 'Enter height',
            required: true
          }
        },

        {
          key: 'weight',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Weight',
            placeholder: 'Enter weight',
            required: true
          }
        }, {
          key: 'address',
          type: 'textarea',
          templateOptions: {
            type: 'text',
            required: true,
            label: 'Full address',
            placeholder: 'Enter your full address',
          }
        }, {
          key: 'province',
          type: 'typeahead',
          templateOptions: {
            label: 'Province',
            options: province.getProvinces()
          }
        },
      ];
    };


    formServiceFactory.getPersonOccupationForm = function() {
      return [{
        key: 'employmentStatus',
        type: 'checkbox',
        templateOptions: {
          label: "Are you employeed?"
        }
      }, {
        key: 'occupation',
        type: 'select',
        templateOptions: {
          label: 'Please select your occupation',
          options: [{
            name: 'Doctor',
            value: 'doctor'
          }, {
            name: 'Lawyer',
            value: 'lawyer'
          }],
          onChange: function($viewValue, $modelValue, scope) {

            if ($viewValue == 'doctor') {
              scope.model.coverage = 3000;
            } else {
              scope.model.coverage = 1000;
            }
          }
        },
        hideExpression: '!model.employmentStatus'
      }, {
        key: 'salary',
        type: 'input',
        templateOptions: {
          label: 'Please enter your salary',
          type: 'number'
        },
        hideExpression: '!model.employmentStatus'
      }, {
        key: 'coverage',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Coverage'
        },
        hideExpression: 'model.occupation == null'
      }, ];
    };


    formServiceFactory.getMedicalQuestionsForm = function() {

      return [

        {
          key: 'heartCondition',
          type: 'radio',
          defaultValue: 'no',

          templateOptions: {
            options: [{
              name: 'Yes',
              value: 'yes'
            }, {
              name: 'No',
              value: 'no'
            }],
            label: 'Did you have any heart condition',
            required: true
          }
        }, {
          hideExpression: 'model.heartCondition==="no"',
          fieldGroup: formServiceFactory.getDynamicQuestions()
        }, {
          key: 'cancer',
          type: 'radio',
          templateOptions: {
            label: 'Do you have cancer',
            required: true,
            options: [{
              name: 'Yes',
              value: 'yes'
            }, {
              name: 'No',
              value: 'no'
            }]
          }
        },
      ];
    };

    formServiceFactory.getRepeatingSection = function() {

      return [

        {
          type: 'repeatSection',
          key: 'drugDetails',
          templateOptions: {
            btnText: 'Add another drug',
            fields: [{
              key: 'drugName',
              type: 'input',
              templateOptions: {
                label: 'Drug Name'
              }
            }, {
              key: 'consumptionDuration',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Drug consumption duration'
              }
            }]
          }
        }
      ];

    };


    formServiceFactory.getDynamicQuestions = function() {
      return [{
        type: 'radio',
        key: 'hospitalized',
        defaultValue: 'no',
        templateOptions: {
          label: 'Were you hospitalized',
          options: [{
            name: 'Yes',
            value: 'yes'
          }, {
            name: 'No',
            value: 'no'
          }],
          require: true,
        }
      }, {
        type: 'select',
        key: 'conditionName',
        templateOptions: {
          label: 'Please specify the condition',
          options: [{
            name: 'Heart Transplant',
            value: 'ht'
          }, {
            name: 'Heart Attack',
            value: 'ha'
          }],
          required: true
        },
        hideExpression: 'model.hospitalized==="no"'
      }];

    };

    return formServiceFactory;

  });

};
