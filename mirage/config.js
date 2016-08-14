export default function() {
  this.passthrough('https://localhost:3000/query');
  this.get('https://nimbus.herokuapp.com/query', () => {
    let records = [
      {
        "patient": {
          "id": "d531c84d-67f9-48d3-a019-df4ed4ca349a",
          "first_name": "SERGII",
          "last_name": "MYSELF",
          "middle_initial": null,
          "prefix": null,
          "suffix": null,
          "ssn": null,
          "name": "Sergii Myself",
          "dob": null,
          "email_address": null,
          "status": "active",
          "status_id": "A",
          "legacy_patient_id": null,
          "race_id": null,
          "chart_number": null,
          "account_number": "0223073-2492028911",
          "business_entity_id": "4679eb33-85ed-4f8a-8c6c-a1a4bec3639b",
          "business_entity_name": "HACKDAY TEAM 5",
          "date_of_death": null,
          "last_seen_date": null,
          "drivers_license_number": null,
          "drivers_license_state_id": null,
          "drivers_license_state_cc_id": null,
          "marital_status": null,
          "language_id": 146,
          "language": "English",
          "language_code": "eng",
          "gender": "",
          "gender_id": null,
          "ethnicity": null,
          "race": null,
          "race_code": null,
          "primary_location": {
            "id": null,
            "name": null
          },
        "primary_provider_id": null,
        "referring_physician_npi": null,
        "primary_care_physician_npi": null,
        "responsible_party": {
          "responsible_party_person_relationship_type_id": 1,
          "responsible_party_person_relationship_type_name": "Self",
          "responsible_party_person_relationship_type_code": "18",
          "id": 24194758,
          "name": "SERGII MYSELF",
          "last_name": "MYSELF",
          "first_name": "SERGII",
          "middle": null,
          "dob": null,
          "gender_id": null,
          "gender": "",
          "addresses": [
            {
              "id": 24558753,
              "line1": "5200 BLUE LAGOON DR",
              "line2": null,
              "city": "MIAMI",
              "state": "Florida",
              "state_id": 10,
              "zip": "331267006",
              "country_id": 225,
              "country_name": "UNITED STATES",
              "is_primary": true
            }
          ],
          "phones": []
        },
        "insurance_profiles": [
          {
            "id": 34538852,
            "self_pay": true,
            "insurance_policies": []
          }
        ],
        "addresses": [
          {
            "id": 24558753,
            "line1": "5200 BLUE LAGOON DR",
            "line2": null,
            "city": "MIAMI",
            "state": "Florida",
            "state_id": 10,
            "zip": "331267006",
            "country_id": 225,
            "country_name": "UNITED STATES",
            "county_name": null,
            "is_primary": true
          }
        ],
        "phones": [],
        "photo": {},
        "gender_code": ""
      },

      "balance": [
      {
        "balance_type": "Account",
        "unapplied_credit": "0.00",
        "unbilled": "0.00",
        "current": "0.00",
        "greater_than_30": "0.00",
        "greater_than_60": "0.00",
        "greater_than_90": "0.00",
        "greater_than_120": "0.00",
        "total": "0.00"
      },
      {
        "balance_type": "Patient",
        "unapplied_credit": "0.00",
        "unbilled": "0.00",
        "current": "0.00",
        "greater_than_30": "0.00",
        "greater_than_60": "0.00",
        "greater_than_90": "0.00",
        "greater_than_120": "0.00",
        "total": "0.00"
      },
      {
        "balance_type": "Insurance",
        "unapplied_credit": "0.00",
        "unbilled": "0.00",
        "current": "0.00",
        "greater_than_30": "0.00",
        "greater_than_60": "0.00",
        "greater_than_90": "0.00",
        "greater_than_120": "0.00",
        "total": "0.00"
      }
      ],

      "appointment": {
        "id": "36ad9dac-3d9c-4b28-867a-2025e9a90641",
        "appointment_status": {
          "id": 1,
          "code": "P",
          "name": "Pending"
        },
        "patient": {
          "id": "d531c84d-67f9-48d3-a019-df4ed4ca349a",
          "chart_number": null,
          "date_of_birth": null,
          "first_name": "Sergii",
          "last_name": "myself",
          "middle_initial": null,
          "gender_id": null,
          "email": null,
          "patient_status": "A",
          "primary_phone_number": null
        },
        "location": {
          "id": 19668,
          "name": "LOCATION1"
        },
        "cancellation_details": {
          "id": null,
          "detail": null,
          "comments": null
        },
        "chief_complaint": null,
        "task_id": null,
        "updated_by_application": null,
        "appointment_cancellation_reason_id": null,
        "arrived_at": null,
        "business_entity_id": 3830,
        "comments": null,
        "confirmation_details": null,
        "departed_at": null,
        "exam_room_id": null,
        "is_confirmed": false,
        "is_force_overbook": false,
        "patient_contacted": null,
        "recurrence_id": null,
        "recurrence_index": null,
        "referring_physician_npi": null,
        "visit_reason_id": 54580,
        "resource_id": 16631,
        "provider_id": "17142",
        "start_time": "2016-08-13T07:00:00-04:00",
        "end_time": "2016-08-13T07:05:00-04:00",
        "created_at": "2016-08-13T16:00:28-04:00",
        "updated_at": "2016-08-13T16:00:28-04:00",
        "encounter_id": null
      }
    }

    ];
    return records;
  });
}
