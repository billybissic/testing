import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, Form} from '@angular/forms';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { BartenderApplication} from '../../controllers/employee/bartender-application.interface';
import { EmployeeEducation } from '../../controllers/employee/bartender-application.interface';
import { EmployeeHistory } from '../../controllers/employee/bartender-application.interface';
import { EmployeeReference } from '../../controllers/employee/bartender-application.interface';

@Component({
  selector: 'app-employee-applications',
  templateUrl: './employee-application.component.html',
  styleUrls: ['./employee-applications.component.scss']
})
export class EmployeeApplicationsComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;

  employmentApplicationForm: FormGroup ;
  bartenderApplication: BartenderApplication;
  eligibleForEmployment = false;
  isUsVeteran = false;
  backgroundCheckAgreement = false;
  employeeEducation: EmployeeEducation[] = [];
  employeeHistory: EmployeeHistory[] = [];
  employeeReference: EmployeeReference[] = [];

  constructor(private formBuilder: FormBuilder) { }

  /* form controls */
  firstNameCtrl: FormControl = new FormControl;
  lastNameCtrl: FormControl = new FormControl;
  addressCtrl: FormControl = new FormControl;
  cityCtrl: FormControl = new FormControl;
  stateCtrl: FormControl = new FormControl;
  zipCtrl: FormControl = new FormControl;
  phoneNumberCtrl: FormControl = new FormControl;
  emailAddressCtrl: FormControl = new FormControl;
  workEligibilityCtrl: FormControl = new FormControl;
  usVeteranCtrl: FormControl = new FormControl;
  backgroundCheckCtrl: FormControl = new FormControl;
  desiredPositionCtrl: FormControl = new FormControl;
  availableStartDateCtrl: FormControl = new FormControl;
  desiredPayCtrl: FormControl = new FormControl;
  desiredEmploymentTypeCtrl: FormControl = new FormControl;
  educationInstanceCtrls: FormArray;
  employeeReferenceInstanceCtrls: FormArray;
  employmentHistoryInstanceCtrls: FormArray;
  signatureCtrl: FormControl = new FormControl;
  signatureDateCtrl: FormControl = new FormControl;

  ngOnInit() {

    this.firstNameCtrl = this.formBuilder.control('', Validators.required);
    this.lastNameCtrl = this.formBuilder.control('', Validators.required);
    this.addressCtrl = this.formBuilder.control('', Validators.required);
    this.cityCtrl = this.formBuilder.control('', Validators.required);
    this.stateCtrl = this.formBuilder.control('', Validators.required);
    this.zipCtrl = this.formBuilder.control('', Validators.required);
    this.phoneNumberCtrl = this.formBuilder.control('', Validators.required);
    this.emailAddressCtrl = this.formBuilder.control('', Validators.required);
    this.workEligibilityCtrl = this.formBuilder.control('', Validators.required);
    this.usVeteranCtrl = this.formBuilder.control('', Validators.required);
    this.backgroundCheckCtrl = this.formBuilder.control('', Validators.required);
    this.desiredPositionCtrl = this.formBuilder.control('', Validators.required);
    this.availableStartDateCtrl = this.formBuilder.control('', Validators.required);
    this.desiredPayCtrl = this.formBuilder.control('', Validators.required);
    this.desiredEmploymentTypeCtrl = this.formBuilder.control('', Validators.required);
    this.educationInstanceCtrls = this.formBuilder.array( []);
    this.employeeReferenceInstanceCtrls = this.formBuilder.array([]);
    this.employmentHistoryInstanceCtrls = this.formBuilder.array([]);
    this.signatureCtrl = this.formBuilder.control('', Validators.required);
    this.signatureDateCtrl = this.formBuilder.control('', Validators.required);

    this.employmentApplicationForm = this.formBuilder.group({

      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl,
      address: this.addressCtrl,
      city: this.cityCtrl,
      state: this.stateCtrl,
      zip: this.zipCtrl,
      phoneNumber: this.phoneNumberCtrl,
      emailAddress: this.emailAddressCtrl,
      workEligibility: this.workEligibilityCtrl,
      usVeteran: this.usVeteranCtrl,
      backgroundCheck: this.backgroundCheckCtrl,
      desiredPosition: this.desiredPositionCtrl,
      availableStartDate: this.availableStartDateCtrl,
      desiredPay: this.desiredPayCtrl,
      desiredEmploymentType: this.desiredEmploymentTypeCtrl,
      educationInstances: this.educationInstanceCtrls,
      employeeReferenceInstances: this.employeeReferenceInstanceCtrls,
      employmentHistoryInstances: this.employmentHistoryInstanceCtrls,
      signature: this.signatureCtrl,
      signatureDate: this.signatureDateCtrl
    });

      this.addEducationInstance();
      this.addEmployeeReferenceInstance();
      this.addEmploymentHistoryInstance();
  }

  createEducationInstance(): FormGroup {
    return this.formBuilder.group({
      schoolName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      yearsAttended: new FormControl('', Validators.required),
      degreeReceived: new FormControl('', Validators.required),
      major: new FormControl('', Validators.required)
    });
  }

  addEducationInstance(): void {
    (<FormArray>this.employmentApplicationForm.get('educationInstances')).push(this.createEducationInstance());
  }

  deleteEducationInstance(index: number): void {
    if (index !== 0) {
      (<FormArray>this.employmentApplicationForm.get('educationInstances')).removeAt(index);
    }
  }

  createEmployeeReferenceInstance(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  addEmployeeReferenceInstance(): void {
    (<FormArray>this.employmentApplicationForm.get('employeeReferenceInstances')).push(this.createEmployeeReferenceInstance());
  }

  deleteEmployeeReferenceInstance(index: number): void {
    if (index !== 0) {
      (<FormArray>this.employmentApplicationForm.get('employeeReferenceInstances')).removeAt(index);
    }
  }

  createEmploymentHistoryInstance(): FormGroup {
    return this.formBuilder.group({
      employer: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      startingDate: new FormControl('', Validators.required),
      endingDate: new FormControl('', Validators.required),
      workPhone: new FormControl('', Validators.required),
      startingPayRate: new FormControl('', Validators.required),
      endingPayRate: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    });
  }

  addEmploymentHistoryInstance(): void {
    (<FormArray>this.employmentApplicationForm.get('employmentHistoryInstances')).push(this.createEmploymentHistoryInstance());
  }

  deleteEmploymentHistoryInstance(index: number): void {
    if (index !== 0 ) {
      (<FormArray>this.employmentApplicationForm.get('employmentHistoryInstances')).removeAt(index);
    }
  }

  submit(): void {
    this.bartenderApplication = {
      _id: '',
      firstName: this.employmentApplicationForm.get('firstName').value,
      lastName: this.employmentApplicationForm.get('lastName').value,
      employeeAddress: {
        address: this.employmentApplicationForm.get('address').value,
        city: this.employmentApplicationForm.get('city').value,
        state: this.employmentApplicationForm.get('state').value,
        zip: this.employmentApplicationForm.get('zip').value
      },
      employeeInformation: {
        phone: this.employmentApplicationForm.get('phone').value,
        emailAddress: this.employmentApplicationForm.get('emailAddress').value,
        eligibleForEmployment: this.eligibleForEmployment,
        isUsVeteran: this.isUsVeteran,
        backgroundCheckAgreement: this.backgroundCheckAgreement,
      },
      employeeEmploymentPosition: {
        desiredPosition: this.employmentApplicationForm.get('desiredPosition').value,
        availableStartDate: this.employmentApplicationForm.get('availableStartDate').value,
        desiredPay: this.employmentApplicationForm.get('desiredPay').value,
        desiredEmploymentType: this.employmentApplicationForm.get('desiredEmploymentType').value,
      },
      employeeEducation: this.employeeEducation,
      employeeHistory: this.employeeHistory,
      employeeReferences: this.employeeReference,
      employeeSignature: {
        employeeSignature: this.employmentApplicationForm.get('signature').value,
        employeeSignatureDate: this.employmentApplicationForm.get('signatureDate').value
      }
    };
  }
}
