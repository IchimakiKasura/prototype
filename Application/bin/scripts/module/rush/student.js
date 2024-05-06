"use strict";
import { _schedule } from './schedules.js'

const _students = {
    "17e92714": {
        picture: "./bin/images/user pfp/416454603_25502837919307078_3034000156532422606_n.jpg",
        name: "KEAN JAMES D. PEPITO",
        year: "2023-2024",
        section: "GRADE 11 - TVL-ICT",
        web: {
            grade: "ELEVEN",
            section: "TVL - ICT"
        },
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
            TOTAL_PRESET: [
                14, // A
                24, // S
                24, // O
                10, // N
                10, // D
                22, // J
                20, // F
                15, // M
                0,  // A
                0,  // M
                0   // J
            ]
        },
        act: [
            "[21ST CENTURY] FILMING",
            "[EMTECH] ICT PROJECT",
            "[ANIMATION 1] COMIC",
            "[COMPROG 2] POS (PAYMENT ONLINE SYSTEM)",
            "[PR 1] RESEARCH DEFENSE",
            "[PAP] KONSEPTONG PAPEL",
            "[PERDEV] Line Line",
            "[PERDEV] Dreamboard",
            "[PERDEV] Values (Table)",
            "[PERDEV] Write 10 Hobbies",
            "[PERDEV] INTERVIEW VIDEO",
        ]
    },

    "9d3ceb45": {   // RIVERA
        picture: "./bin/images/user pfp/412362167_1041678766885672_4608015601984196429_n.jpg",
        name: "PHAUL RICHARD T. RIVERA",
        year: "2023-2024",
        section: "GRADE 11 - TVL-ICT",
        web: {
            grade: "ELEVEN",
            section: "TVL - ICT"
        },
        person_no: "2023-000243",
        balance: "0",
        grades: {
            first_semester: {
                MID: [
                    /* PROGRAMMING 1 */          87,
                    /* EARTH AND LIFE SCIENCE */ 89,
                    /* PERSONAL DEVELOPMENT */   86,
                    /* ORAL COMMUNICATION */     82,
                    /* ENGLISH ACADEMIC */       81,
                    /* UNDERSTANDING CULTURE */  85,
                    /* GENERAL MATH */           80,
                    /* KOMMUNIKASYON */          87,
                    /* PHYSICAL EDUCATION */     87
                ],
                FINAL: [
                    /* PROGRAMMING 1 */          89,
                    /* EARTH AND LIFE SCIENCE */ 88,
                    /* PERSONAL DEVELOPMENT */   86,
                    /* ORAL COMMUNICATION */     91,
                    /* ENGLISH ACADEMIC */       83,
                    /* UNDERSTANDING CULTURE */  86,
                    /* GENERAL MATH */           81,
                    /* KOMMUNIKASYON */          89,
                    /* PHYSICAL EDUCATION */     88
                ]
            },
            second_semester: {
                MID: [
                    /* PROGRAMMING 2 */              85,
                    /* READING AND WRITING */        79,
                    /* 21ST CENTURY */               85,
                    /* EMPOWERMENT TECHNOLOGY */     85,
                    /* PERSONAL DEVELOPMENT */       89,
                    /* PRACTICAL RESEARCH 1 */       80,
                    /* PAGBASA AT PAGSUSURI */       91,
                    /* ANIMATION 1 */                86,
                    /* PROBABILITY AND STATISTICS */ 83,
                    /* PHYISICAL EDUCATION */        84
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
            TOTAL_PRESET: [
                14, // A
                24, // S
                24, // O
                20, // N
                8, // D
                19, // J
                22, // F
                17, // M
                0,  // A
                0,  // M
                0   // J
            ]
        },
        act: [
            "[21ST CENTURY] FILMING",
            "[EMTECH] ICT PROJECT",
            "[ANIMATION 1] COMIC",
            "[COMPROG 2] POS (PAYMENT ONLINE SYSTEM)",
            "[PR 1] RESEARCH DEFENSE",
            "[PAP] KONSEPTONG PAPEL",
            "[PERDEV] Line Line",
            "[PERDEV] Dreamboard",
            "[PERDEV] Values (Table)",
            "[PERDEV] Write 10 Hobbies",
            "[PERDEV] INTERVIEW VIDEO",
        ]
    },

    "77c5e013": {   // KIEL
        picture: "./bin/images/user pfp/att.0LfoRkInTrY5dvC3-7dR7nuLNKBdZXQzm-JnXxn1Z6A.jpg",
        name: "KIEL ANTHONY C. VILLANUEVA",
        year: "2023-2024",
        section: "GRADE 11 - TVL-ICT",
        web: {
            grade: "ELEVEN",
            section: "TVL - ICT"
        },
        person_no: "2023-000168",
        balance: "0",
        grades: {
            first_semester: {
                MID: [
                    /* PROGRAMMING 1 */          88,
                    /* EARTH AND LIFE SCIENCE */ 90,
                    /* PERSONAL DEVELOPMENT */   86,
                    /* ORAL COMMUNICATION */     84,
                    /* ENGLISH ACADEMIC */       85,
                    /* UNDERSTANDING CULTURE */  86,
                    /* GENERAL MATH */           88,
                    /* KOMMUNIKASYON */          88,
                    /* PHYSICAL EDUCATION */     89
                ],
                FINAL: [
                    /* PROGRAMMING 1 */          89,
                    /* EARTH AND LIFE SCIENCE */ 91,
                    /* PERSONAL DEVELOPMENT */   86,
                    /* ORAL COMMUNICATION */     92,
                    /* ENGLISH ACADEMIC */       87,
                    /* UNDERSTANDING CULTURE */  90,
                    /* GENERAL MATH */           87,
                    /* KOMMUNIKASYON */          93,
                    /* PHYSICAL EDUCATION */     89
                ]
            },
            second_semester: {
                MID: [
                    /* PROGRAMMING 2 */              "CONFIDENTIAL",
                    /* READING AND WRITING */        "CONFIDENTIAL",
                    /* 21ST CENTURY */               "CONFIDENTIAL",
                    /* EMPOWERMENT TECHNOLOGY */     "CONFIDENTIAL",
                    /* PERSONAL DEVELOPMENT */       "CONFIDENTIAL",
                    /* PRACTICAL RESEARCH 1 */       "CONFIDENTIAL",
                    /* PAGBASA AT PAGSUSURI */       "CONFIDENTIAL",
                    /* ANIMATION 1 */                "CONFIDENTIAL",
                    /* PROBABILITY AND STATISTICS */ "CONFIDENTIAL",
                    /* PHYISICAL EDUCATION */        "CONFIDENTIAL"
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
            TOTAL_PRESET: [
                14, // A
                24, // S
                24, // O
                21, // N
                11, // D
                22, // J
                22, // F
                17, // M
                0,  // A
                0,  // M
                0   // J
            ]
        },
        act: [
            "[21ST CENTURY] FILMING",
            "[EMTECH] ICT PROJECT",
            "[ANIMATION 1] COMIC",
            "[COMPROG 2] POS (PAYMENT ONLINE SYSTEM)",
            "[PR 1] RESEARCH DEFENSE",
            "[PAP] KONSEPTONG PAPEL",
            "[PERDEV] Line Line",
            "[PERDEV] Dreamboard",
            "[PERDEV] Values (Table)",
            "[PERDEV] Write 10 Hobbies",
            "[PERDEV] INTERVIEW VIDEO",
        ]
    },

    "457512f6": {   // SORIO
        picture: "./bin/images/user pfp/437178928_1109753623646622_712653660712889630_n.jpg",
        name: "MARCO P. SORIO",
        year: "2023-2024",
        section: "GRADE 11 - TVL-ICT",
        web: {
            grade: "ELEVEN",
            section: "TVL - ICT"
        },
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
            TOTAL_PRESET: [
                14, // A
                24, // S
                24, // O
                21, // N
                11, // D
                22, // J
                22, // F
                17, // M
                0,  // A
                0,  // M
                0   // J
            ]
        },
        act: [
            "[21ST CENTURY] FILMING",
            "[EMTECH] ICT PROJECT",
            "[ANIMATION 1] COMIC",
            "[COMPROG 2] POS (PAYMENT ONLINE SYSTEM)",
            "[PR 1] RESEARCH DEFENSE",
            "[PAP] KONSEPTONG PAPEL",
            "[PERDEV] Line Line",
            "[PERDEV] Dreamboard",
            "[PERDEV] Values (Table)",
            "[PERDEV] Write 10 Hobbies",
            "[PERDEV] INTERVIEW VIDEO",
        ]
    },

    "sample": {
        picture: "../favicon.ico",
        name: "HTA",
        year: "--",
        section: "--",
        person_no: "--",
        balance: "0",
        grades: {
            first_semester: {},
            second_semester: {}
        },
        attendance: {
            TOTAL_PRESET: [
                30, // A
                30, // S
                30, // O
                30, // N
                30, // D
                30, // J
                30, // F
                30, // M
                30,  // A
                30,  // M
                30   // J
            ]
        },
        act: [
            "[21ST CENTURY] FILMING",
            "[EMTECH] ICT PROJECT",
            "[ANIMATION 1] COMIC",
            "[COMPROG 2] POS (PAYMENT ONLINE SYSTEM)",
            "[PR 1] RESEARCH DEFENSE",
            "[PAP] KONSEPTONG PAPEL",
            "[PERDEV] Line Line",
            "[PERDEV] Dreamboard",
            "[PERDEV] Values (Table)",
            "[PERDEV] Write 10 Hobbies",
        ]
    }
}

export class students {

    type = "student";
    picture;
    name;
    year;
    section;
    person_no;
    grades;
    attendance;
    schedule;
    balance;
    act;

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
            this.act = _students[value].act
    
            this.grades = _students[value].grades;
            this.attendance = _students[value].attendance.TOTAL_PRESET;

            this.schedule = _schedule[_students[value].section]

        }
        catch
        {
            this.isError = true;
        }
    }

}