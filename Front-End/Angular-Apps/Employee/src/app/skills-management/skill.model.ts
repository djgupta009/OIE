export class SkillModel{
    skill_name: string;
    skill_description: string;

    constructor(value: Object){
        Object.apply(this,value);
    }
}