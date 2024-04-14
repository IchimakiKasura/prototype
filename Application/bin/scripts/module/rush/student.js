"use strict";
import { _schedule } from './schedules.js'

const _students = {
    "17e92714": {
        picture: "",
        name: "KEAN JAMES D. PEPITO",
        year: "2023-2024",
        section: "GRADE 11 - TV-ICT",
        person_no: "2019-000479",
        balance: "0",
        grades: {
            first_semester: {
                MID: [
                    /* PROGRAMMING 1 */          93,
                    /* EARTH AND LIFE SCIENCE */ 89,
                    /* PERSONAL DEVELOPMENT */   91,
                    /* ORAL COMMUNICATION */     86,
                    /* ENGLISH ACADEMIC */       89,
                    /* UNDERSTANDING CULTURE */  92,
                    /* GENERAL MATH */           88,
                    /* KOMMUNIKASYON */          87,
                    /* PHYSICAL EDUCATION */     90
                ],
                FINAL: [
                    /* PROGRAMMING 1 */          95,
                    /* EARTH AND LIFE SCIENCE */ 90,
                    /* PERSONAL DEVELOPMENT */   86,
                    /* ORAL COMMUNICATION */     86,
                    /* ENGLISH ACADEMIC */       84,
                    /* UNDERSTANDING CULTURE */  84,
                    /* GENERAL MATH */           86,
                    /* KOMMUNIKASYON */          87,
                    /* PHYSICAL EDUCATION */     89
                ]
            },
            second_semester: {
                MID: [
                    /* PROGRAMMING 2 */              95,
                    /* READING AND WRITING */        80,
                    /* 21ST CENTURY */               86,
                    /* EMPOWERMENT TECHNOLOGY */     87,
                    /* PERSONAL DEVELOPMENT */       86,
                    /* PRACTICAL RESEARCH 1 */       85,
                    /* PAGBASA AT PAGSUSURI */       92,
                    /* ANIMATION 1 */                87,
                    /* PROBABILITY AND STATISTICS */ 86,
                    /* PHYISICAL EDUCATION */        86
                ],
                FINAL: [
                    /* PROGRAMMING 2 */              0,
                    /* READING AND WRITING */        0,
                    /* 21ST CENTURY */               0,
                    /* EMPOWERMENT TECHNOLOGY */     0,
                    /* PERSONAL DEVELOPMENT */       0,
                    /* PRACTICAL RESEARCH 1 */       0,
                    /* PAGBASA AT PAGSUSURI */       0,
                    /* ANIMATION 1 */                0,
                    /* PROBABILITY AND STATISTICS */ 0,
                    /* PHYISICAL EDUCATION */        0
                ]
            }
        },
        attendance: {
            TOTAL_DAYS: 0,
            TOTAL_PRESENT: 139,
            TIMES_TARDY: 0
        }
    },
    
    "9d3ceb45": {   // RIVERA
        picture: "",
        name: "PHAUL RICHARD T. RIVERA",
        year: "2023-2024",
        section: "GRADE 11 - TV-ICT",
        person_no: "2023-000000",
        balance: "0",
        grades: {
            first_semester: {
                MID: [
                    /* PROGRAMMING 1 */          0,
                    /* EARTH AND LIFE SCIENCE */ 0,
                    /* PERSONAL DEVELOPMENT */   0,
                    /* ORAL COMMUNICATION */     0,
                    /* ENGLISH ACADEMIC */       0,
                    /* UNDERSTANDING CULTURE */  0,
                    /* GENERAL MATH */           0,
                    /* KOMMUNIKASYON */          0,
                    /* PHYSICAL EDUCATION */     0
                ],
                FINAL: [
                    /* PROGRAMMING 1 */          0,
                    /* EARTH AND LIFE SCIENCE */ 0,
                    /* PERSONAL DEVELOPMENT */   0,
                    /* ORAL COMMUNICATION */     0,
                    /* ENGLISH ACADEMIC */       0,
                    /* UNDERSTANDING CULTURE */  0,
                    /* GENERAL MATH */           0,
                    /* KOMMUNIKASYON */          0,
                    /* PHYSICAL EDUCATION */     0
                ]
            },
            second_semester: {
                MID: [
                    /* PROGRAMMING 2 */              0,
                    /* READING AND WRITING */        0,
                    /* 21ST CENTURY */               0,
                    /* EMPOWERMENT TECHNOLOGY */     0,
                    /* PERSONAL DEVELOPMENT */       0,
                    /* PRACTICAL RESEARCH 1 */       0,
                    /* PAGBASA AT PAGSUSURI */       0,
                    /* ANIMATION 1 */                0,
                    /* PROBABILITY AND STATISTICS */ 0,
                    /* PHYISICAL EDUCATION */        0
                ],
                FINAL: [
                    /* PROGRAMMING 2 */              0,
                    /* READING AND WRITING */        0,
                    /* 21ST CENTURY */               0,
                    /* EMPOWERMENT TECHNOLOGY */     0,
                    /* PERSONAL DEVELOPMENT */       0,
                    /* PRACTICAL RESEARCH 1 */       0,
                    /* PAGBASA AT PAGSUSURI */       0,
                    /* ANIMATION 1 */                0,
                    /* PROBABILITY AND STATISTICS */ 0,
                    /* PHYISICAL EDUCATION */        0
                ]
            }
        },
        attendance: {
            TOTAL_DAYS: 0,
            TOTAL_PRESENT: 82,
            TIMES_TARDY: 0
        }
    },

    "77c5e013": {   // KIEL
        picture: "",
        name: "KIEL ANTHONY C. VILLANUEVA",
        year: "2023-2024",
        section: "GRADE 11 - TV-ICT",
        person_no: "2023-000000",
        balance: "0",
        grades: {
            first_semester: {
                MID: [
                    /* PROGRAMMING 1 */          0,
                    /* EARTH AND LIFE SCIENCE */ 0,
                    /* PERSONAL DEVELOPMENT */   0,
                    /* ORAL COMMUNICATION */     0,
                    /* ENGLISH ACADEMIC */       0,
                    /* UNDERSTANDING CULTURE */  0,
                    /* GENERAL MATH */           0,
                    /* KOMMUNIKASYON */          0,
                    /* PHYSICAL EDUCATION */     0
                ],
                FINAL: [
                    /* PROGRAMMING 1 */          0,
                    /* EARTH AND LIFE SCIENCE */ 0,
                    /* PERSONAL DEVELOPMENT */   0,
                    /* ORAL COMMUNICATION */     0,
                    /* ENGLISH ACADEMIC */       0,
                    /* UNDERSTANDING CULTURE */  0,
                    /* GENERAL MATH */           0,
                    /* KOMMUNIKASYON */          0,
                    /* PHYSICAL EDUCATION */     0
                ]
            },
            second_semester: {
                MID: [
                    /* PROGRAMMING 2 */              0,
                    /* READING AND WRITING */        0,
                    /* 21ST CENTURY */               0,
                    /* EMPOWERMENT TECHNOLOGY */     0,
                    /* PERSONAL DEVELOPMENT */       0,
                    /* PRACTICAL RESEARCH 1 */       0,
                    /* PAGBASA AT PAGSUSURI */       0,
                    /* ANIMATION 1 */                0,
                    /* PROBABILITY AND STATISTICS */ 0,
                    /* PHYISICAL EDUCATION */        0
                ],
                FINAL: [
                    /* PROGRAMMING 2 */              0,
                    /* READING AND WRITING */        0,
                    /* 21ST CENTURY */               0,
                    /* EMPOWERMENT TECHNOLOGY */     0,
                    /* PERSONAL DEVELOPMENT */       0,
                    /* PRACTICAL RESEARCH 1 */       0,
                    /* PAGBASA AT PAGSUSURI */       0,
                    /* ANIMATION 1 */                0,
                    /* PROBABILITY AND STATISTICS */ 0,
                    /* PHYISICAL EDUCATION */        0
                ]
            }
        },
        attendance: {
            TOTAL_DAYS: 0,
            TOTAL_PRESENT: 82,
            TIMES_TARDY: 0
        }
    },

    "457512f6": {   // SORIO
        picture: "",
        name: "MARCO P. SORIO",
        year: "2023-2024",
        section: "GRADE 11 - TV-ICT",
        person_no: "2023-000299",
        balance: "0",
        grades: {
            first_semester: {
                MID: [
                    /* PROGRAMMING 1 */          86,
                    /* EARTH AND LIFE SCIENCE */ 88,
                    /* PERSONAL DEVELOPMENT */   92,
                    /* ORAL COMMUNICATION */     83,
                    /* ENGLISH ACADEMIC */       83,
                    /* UNDERSTANDING CULTURE */  87,
                    /* GENERAL MATH */           83,
                    /* KOMMUNIKASYON */          84,
                    /* PHYSICAL EDUCATION */     89
                ],
                FINAL: [
                    /* PROGRAMMING 1 */          86,
                    /* EARTH AND LIFE SCIENCE */ 89,
                    /* PERSONAL DEVELOPMENT */   90,
                    /* ORAL COMMUNICATION */     92,
                    /* ENGLISH ACADEMIC */       84,
                    /* UNDERSTANDING CULTURE */  87,
                    /* GENERAL MATH */           85,
                    /* KOMMUNIKASYON */          92,
                    /* PHYSICAL EDUCATION */     88
                ]
            },
            second_semester: {
                MID: [
                    /* PROGRAMMING 2 */              86,
                    /* READING AND WRITING */        82,
                    /* 21ST CENTURY */               85,
                    /* EMPOWERMENT TECHNOLOGY */     84,
                    /* PERSONAL DEVELOPMENT */       91,
                    /* PRACTICAL RESEARCH 1 */       87,
                    /* PAGBASA AT PAGSUSURI */       91,
                    /* ANIMATION 1 */                86,
                    /* PROBABILITY AND STATISTICS */ 84,
                    /* PHYISICAL EDUCATION */        90
                ],
                FINAL: [
                    /* PROGRAMMING 2 */              0,
                    /* READING AND WRITING */        0,
                    /* 21ST CENTURY */               0,
                    /* EMPOWERMENT TECHNOLOGY */     0,
                    /* PERSONAL DEVELOPMENT */       0,
                    /* PRACTICAL RESEARCH 1 */       0,
                    /* PAGBASA AT PAGSUSURI */       0,
                    /* ANIMATION 1 */                0,
                    /* PROBABILITY AND STATISTICS */ 0,
                    /* PHYISICAL EDUCATION */        0
                ]
            }
        },
        attendance: {
            TOTAL_DAYS: 0,
            TOTAL_PRESENT: 155,
            TIMES_TARDY: 0
        }
    },
}

class grades {

    constructor(value)
    {
        return _students[value].grades
    }
}

class attendance {

    total_days;
    total_present;
    times_tardy;
    
    constructor(value)
    {
        this.total_present = _students[value].TOTAL_PRESENT;
    }

}

export class students {

    type = "student";
    picture;
    name;
    year;
    section
    person_no;
    grades;
    attendance;
    schedule;

    isError = false;

    constructor(value)
    {
        try {
            this.picture = _students[value].picture;
            this.name = _students[value].name;
            this.year = _students[value].year;
            this.section = _students[value].section;
            this.person_no = _students[value].person_no;
            this.balance = "₱ "+_students[value].balance;
    
            this.grades = new grades(value);
            this.attendance = new attendance(value);

            this.schedule = _schedule[_students[value].section]
        }
        catch
        {
            this.isError = true;
        }
    }

}