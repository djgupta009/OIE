export class SkillModel{
    skill_name: string;
    skill_description: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}