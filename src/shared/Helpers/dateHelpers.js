export default function isPassDate(date){
    const today = new Date();
    return date < today;
};