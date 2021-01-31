<?php

return [
    'contactInfo' => [
        'phone'      => '(937)-218-2673',
        'resumeLink' => 'http://www.google.com',
        'email'      => 'chkltlabs@gmail.com',
    ],
    'tagRules'    => [
        'tag'       => [
            'allow'    => true,
            'question' => [
                'text'            => 'What is this tag?',
                'acceptedAnswers' => [
                    'a tag',
                    'tag',
                    'the template for new rules',
                ]
            ]
        ],
        'socialism' => [
            'allow'       => false,
            'relatedTags' => ['communism', 'leftism'],
            'question'    => [
                'text'            => 'What was the ideology of the National Socialist German Workers Party? (ends in -ism)',
                'acceptedAnswers' => [
                    'fascism',
                    'nazism',
                    'anti-semitism',
                    'racism',
                    'genocide',
                ]
            ]
        ],
        'cooking'   => [
            'allow'       => true,
            'relatedTags' => ['baking', 'bread', 'food']
        ]
    ],
];
