export class Diagnosis{
    diagnosis_id: number;
    user_id: string;
    pet_id: number;
    clinic_code: number;
    diagnosis_date: string;
    diagnosis_name: string;
    sick_date: string;
    diagnosis_symtom: string;
    diagnosis_record: string;
    diagnosis_cost: number;

    constructor(
        diagnosis_id: number,
        user_id: string,
        pet_id: number,
        clinic_code: number,
        diagnosis_date: string,
        diagnosis_name: string,
        sick_date: string,
        diagnosis_symtom: string,
        diagnosis_record: string,
        diagnosis_cost: number ){
            this.diagnosis_id = diagnosis_id;
            this.user_id = user_id;
            this.pet_id = pet_id;
            this.clinic_code = clinic_code;
            this.diagnosis_date = diagnosis_date;
            this.diagnosis_name = diagnosis_name;
            this.sick_date = sick_date;
            this.diagnosis_symtom = diagnosis_symtom;
            this.diagnosis_record = diagnosis_record;
            this.diagnosis_cost = diagnosis_cost;
    }
}