// ==============================================
// 🏋️‍♂️ B-FIT GYM APP - FRONTEND SCRIPT
// ==============================================

// App State Management
const AppState = {
    currentPage: 'hero',
    user: null,
    currentStreak: 0,
    highestStreak: 0,
    currentDay: new Date().getDay(),
    currentWorkoutDay: null,
    countdownInterval: null,
    lastWorkoutDate: null,
    logoutTimer: null,
    
    // Workout Videos mapping
    workoutVideos: {
        "Lat Pulldown Machine": "assets/videos/lat-pulldown.mp4",
        "Seated Row Machine": "assets/videos/seated-row.mp4",
        "Assisted Pull-up Machine": "assets/videos/assisted-pullup.mp4",
        "Straight Arm Pulldown": "assets/videos/straight-arm-pulldown.mp4",
        "Barbell Bent Over Row": "assets/videos/barbell-row.mp4",
        "One Arm Dumbbell Row": "assets/videos/dumbbell-row.mp4",
        "Preacher Curl Machine": "assets/videos/preacher-curl.mp4",
        "Cable Curl (Bar/Rope)": "assets/videos/cable-curl.mp4",
        "Barbell Curl": "assets/videos/barbell-curl.mp4",
        "Dumbbell Alternate Curl": "assets/videos/dumbbell-curl.mp4",
        "Hammer Curl": "assets/videos/hammer-curl.mp4",
        "Shoulder Press Machine": "assets/videos/shoulder-press.mp4",
        "Lateral Raise Machine": "assets/videos/lateral-raise.mp4",
        "Rear Delt Fly Machine": "assets/videos/rear-delt-fly.mp4",
        "Dumbbell Shoulder Press": "assets/videos/dumbbell-shoulder-press.mp4",
        "Dumbbell Side Lateral Raise": "assets/videos/dumbbell-lateral-raise.mp4",
        "Front Raise (Plate/Dumbbell)": "assets/videos/front-raise.mp4",
        "Tricep Pushdown (Cable)": "assets/videos/tricep-pushdown.mp4",
        "Overhead Tricep Extension (Cable)": "assets/videos/overhead-extension.mp4",
        "Skull Crusher (EZ Bar)": "assets/videos/skull-crusher.mp4",
        "Dumbbell Overhead Tricep Extension": "assets/videos/dumbbell-extension.mp4",
        "Bench Dips (Bodyweight)": "assets/videos/bench-dips.mp4",
        "Chest Press Machine": "assets/videos/chest-press.mp4",
        "Incline Chest Press Machine": "assets/videos/incline-press.mp4",
        "Pec Deck / Chest Fly Machine": "assets/videos/pec-deck.mp4",
        "Flat Barbell Bench Press": "assets/videos/bench-press.mp4",
        "Incline Dumbbell Press": "assets/videos/incline-dumbbell-press.mp4",
        "Dumbbell Chest Fly": "assets/videos/dumbbell-fly.mp4",
        "Push-ups": "assets/videos/pushups.mp4",
        "Shoulder Press Machine (Light)": "assets/videos/shoulder-press-light.mp4",
        "Bent Over Dumbbell Rear Delt Raise": "assets/videos/bent-over-raise.mp4",
        "Front Plate Raise": "assets/videos/front-plate-raise.mp4",
        "Cable Face Pull": "assets/videos/face-pull.mp4",
        "Cable Curl (Straight Bar)": "assets/videos/cable-curl-bar.mp4",
        "Incline Dumbbell Curl": "assets/videos/incline-curl.mp4",
        "Tricep Pushdown (Rope)": "assets/videos/tricep-rope.mp4",
        "Overhead Cable Tricep Extension": "assets/videos/cable-extension.mp4",
        "Skull Crusher (EZ Bar)": "assets/videos/skull-crusher.mp4",
        "Dumbbell Overhead Tricep Extension": "assets/videos/dumbbell-extension.mp4",
        "Bench Dips (Finisher)": "assets/videos/bench-dips.mp4",
        "Leg Press Machine": "assets/videos/leg-press.mp4",
        "Leg Extension Machine": "assets/videos/leg-extension.mp4",
        "Seated Leg Curl Machine": "assets/videos/leg-curl.mp4",
        "Standing Calf Raise Machine": "assets/videos/calf-raise.mp4",
        "Barbell Squat": "assets/videos/squat.mp4",
        "Dumbbell Walking Lunges": "assets/videos/lunges.mp4",
        "Romanian Deadlift (RDL)": "assets/videos/rdl.mp4",
        "Bodyweight Squat (Finisher)": "assets/videos/bodyweight-squat.mp4",
        "Cable Crunches": "assets/videos/cable-crunches.mp4",
        "Leg Raises": "assets/videos/leg-raises.mp4",
        "Russian Twists": "assets/videos/russian-twists.mp4",
        "Plank": "assets/videos/plank.mp4"
    },
    
    warmupVideos: {
        "Jumping Jacks": "assets/videos/jumping-jacks.mp4",
        "High Knees": "assets/videos/high-knees.mp4",
        "Arm Swings (Forward + Backward)": "assets/videos/arm-swings.mp4",
        "Neck Rotations": "assets/videos/neck-rotations.mp4",
        "Shoulder Rotations": "assets/videos/shoulder-rotations.mp4",
        "Arm Circles (Small → Big)": "assets/videos/arm-circles.mp4",
        "Resistance Band Pull Apart": "assets/videos/resistance-band-pull-apart.mp4",
        "Bodyweight Squats": "assets/videos/bodyweight-squats.mp4",
        "Hip Circles": "assets/videos/hip-circles.mp4"
    },
    
    workoutImages: {
        1: "assets/images/monday.jpg",
        2: "assets/images/tuesday.jpg",
        3: "assets/images/wednesday.jpg",
        4: "assets/images/thursday.jpg",
        5: "assets/images/friday.jpg",
        6: "assets/images/saturday.jpg",
        0: "assets/images/sunday.jpg"
    },
    
    warmupExercises: [
        {
            name: "Jumping Jacks",
            duration: "1 min",
            description: "Full body cardio warmup to increase heart rate and blood flow.",
            youtubeLink: "https://www.youtube.com/shorts/FJDZrSZQLiY",
            video: "assets/videos/jumping-jacks.mp4"
        },
        {
            name: "High Knees",
            duration: "30-45 sec",
            description: "Dynamic leg exercise to activate leg muscles and improve coordination.",
            youtubeLink: "https://www.youtube.com/shorts/OWAzOZeIjH4",
            video: "assets/videos/high-knees.mp4"
        },
        {
            name: "Arm Swings (Forward + Backward)",
            duration: "20-20 reps",
            description: "Loosen up shoulder joints and improve upper body mobility.",
            youtubeLink: "https://www.youtube.com/shorts/XTbPqeswd-Y",
            video: "assets/videos/arm-swings.mp4"
        },
        {
            name: "Neck Rotations",
            duration: "10 each side",
            description: "Gentle neck mobility exercise to prevent neck strain during workouts.",
            youtubeLink: "https://www.youtube.com/shorts/ErB655NUEMA",
            video: "assets/videos/neck-rotations.mp4"
        },
        {
            name: "Shoulder Rotations",
            duration: "15-15 reps",
            description: "Warm up shoulder joints and rotator cuff muscles.",
            youtubeLink: "https://www.youtube.com/shorts/-Tvd1XFD8gs",
            video: "assets/videos/shoulder-rotations.mp4"
        },
        {
            name: "Arm Circles (Small → Big)",
            duration: "20 forward + 20 backward",
            description: "Increase shoulder mobility and blood flow to upper body.",
            youtubeLink: "https://www.youtube.com/results?search_query=arm+circles+exercise",
            video: "assets/videos/arm-circles.mp4"
        },
        {
            name: "Resistance Band Pull Apart",
            duration: "2 sets × 15 reps",
            description: "Activate rear deltoids and improve posture.",
            youtubeLink: "https://www.youtube.com/results?search_query=band+pull+apart+exercise",
            video: "assets/videos/resistance-band-pull-apart.mp4"
        },
        {
            name: "Bodyweight Squats",
            duration: "15 reps",
            description: "Warm up legs, glutes, and core for lower body exercises.",
            youtubeLink: "https://www.youtube.com/shorts/-5LhNSMBrEs",
            video: "assets/videos/bodyweight-squats.mp4"
        },
        {
            name: "Hip Circles",
            duration: "10 each side",
            description: "Loosen up hip joints and improve hip mobility.",
            youtubeLink: "https://www.youtube.com/shorts/PZFKu9583Ms",
            video: "assets/videos/hip-circles.mp4"
        }
    ],
    
    workoutSets: {
        1: [
            {
                name: "Back - Machine",
                exercises: [
                    { name: "Lat Pulldown Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=lat+pulldown+machine+proper+form", video: "assets/videos/lat-pulldown.mp4" },
                    { name: "Seated Row Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=seated+row+machine+proper+form", video: "assets/videos/seated-row.mp4" },
                    { name: "Assisted Pull-up Machine", sets: 3, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=assisted+pull+up+machine+proper+form", video: "assets/videos/assisted-pullup.mp4" },
                    { name: "Straight Arm Pulldown", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=straight+arm+pulldown+cable+proper+form", video: "assets/videos/straight-arm-pulldown.mp4" }
                ]
            },
            {
                name: "Back - Free Weight",
                exercises: [
                    { name: "Barbell Bent Over Row", sets: 3, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=barbell+bent+over+row+proper+form", video: "assets/videos/barbell-row.mp4" },
                    { name: "One Arm Dumbbell Row", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=one+arm+dumbbell+row+proper+form", video: "assets/videos/dumbbell-row.mp4" }
                ]
            },
            {
                name: "Biceps - Machine",
                exercises: [
                    { name: "Preacher Curl Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=preacher+curl+machine+proper+form", video: "assets/videos/preacher-curl.mp4" },
                    { name: "Cable Curl (Bar/Rope)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=cable+bicep+curl+proper+form", video: "assets/videos/cable-curl.mp4" }
                ]
            },
            {
                name: "Biceps - Free Weight",
                exercises: [
                    { name: "Barbell Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=barbell+bicep+curl+proper+form", video: "assets/videos/barbell-curl.mp4" },
                    { name: "Dumbbell Alternate Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+alternate+bicep+curl+proper+form", video: "assets/videos/dumbbell-curl.mp4" },
                    { name: "Hammer Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=hammer+curl+proper+form", video: "assets/videos/hammer-curl.mp4" }
                ]
            }
        ],
        2: [
            {
                name: "Shoulder - Machine",
                exercises: [
                    { name: "Shoulder Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=shoulder+press+machine+proper+form", video: "assets/videos/shoulder-press.mp4" },
                    { name: "Lateral Raise Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=lateral+raise+machine+proper+form", video: "assets/videos/lateral-raise.mp4" },
                    { name: "Rear Delt Fly Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=rear+delt+fly+machine+proper+form", video: "assets/videos/rear-delt-fly.mp4" }
                ]
            },
            {
                name: "Shoulder - Free Weight",
                exercises: [
                    { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+shoulder+press+proper+form", video: "assets/videos/dumbbell-shoulder-press.mp4" },
                    { name: "Dumbbell Side Lateral Raise", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+side+lateral+raise+proper+form", video: "assets/videos/dumbbell-lateral-raise.mp4" },
                    { name: "Front Raise (Plate/Dumbbell)", sets: 2, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=front+raise+dumbbell+proper+form", video: "assets/videos/front-raise.mp4" }
                ]
            },
            {
                name: "Triceps - Machine/Cable",
                exercises: [
                    { name: "Tricep Pushdown (Cable)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=tricep+pushdown+cable+proper+form", video: "assets/videos/tricep-pushdown.mp4" },
                    { name: "Overhead Tricep Extension (Cable)", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=overhead+tricep+extension+cable+proper+form", video: "assets/videos/overhead-extension.mp4" }
                ]
            },
            {
                name: "Triceps - Free Weight",
                exercises: [
                    { name: "Skull Crusher (EZ Bar)", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=skull+crusher+ez+bar+proper+form", video: "assets/videos/skull-crusher.mp4" },
                    { name: "Dumbbell Overhead Tricep Extension", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+overhead+tricep+extension+proper+form", video: "assets/videos/dumbbell-extension.mp4" },
                    { name: "Bench Dips (Bodyweight)", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=bench+dips+proper+form", video: "assets/videos/bench-dips.mp4" }
                ]
            }
        ],
        3: [
            {
                name: "Chest - Machine",
                exercises: [
                    { name: "Chest Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=chest+press+machine+proper+form", video: "assets/videos/chest-press.mp4" },
                    { name: "Incline Chest Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+chest+press+machine+proper+form", video: "assets/videos/incline-press.mp4" },
                    { name: "Pec Deck / Chest Fly Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=pec+deck+machine+proper+form", video: "assets/videos/pec-deck.mp4" }
                ]
            },
            {
                name: "Chest - Free Weight",
                exercises: [
                    { name: "Flat Barbell Bench Press", sets: 4, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=flat+barbell+bench+press+proper+form", video: "assets/videos/bench-press.mp4" },
                    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+dumbbell+bench+press+proper+form", video: "assets/videos/incline-dumbbell-press.mp4" },
                    { name: "Dumbbell Chest Fly", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+chest+fly+proper+form", video: "assets/videos/dumbbell-fly.mp4" }
                ]
            },
            {
                name: "ABS - Core Exercises",
                exercises: [
                    { name: "Cable Crunches", sets: 3, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=cable+crunches+proper+form", video: "assets/videos/cable-crunches.mp4" },
                    { name: "Leg Raises", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=leg+raises+proper+form", video: "assets/videos/leg-raises.mp4" },
                    { name: "Russian Twists", sets: 3, reps: "20-25", youtubeLink: "https://www.youtube.com/results?search_query=russian+twists+proper+form", video: "assets/videos/russian-twists.mp4" },
                    { name: "Plank", sets: 3, reps: "45-60 sec", youtubeLink: "https://www.youtube.com/results?search_query=plank+proper+form", video: "assets/videos/plank.mp4" }
                ]
            }
        ],
        4: [
            {
                name: "Shoulder - Machine",
                exercises: [
                    { name: "Lateral Raise Machine", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=lateral+raise+machine+proper+form", video: "assets/videos/lateral-raise.mp4" },
                    { name: "Rear Delt Fly Machine", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=rear+delt+fly+machine+proper+form", video: "assets/videos/rear-delt-fly.mp4" },
                    { name: "Shoulder Press Machine (Light)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=shoulder+press+machine+proper+form", video: "assets/videos/shoulder-press-light.mp4" }
                ]
            },
            {
                name: "Shoulder - Free Weight",
                exercises: [
                    { name: "Dumbbell Side Lateral Raise", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+side+lateral+raise+proper+form", video: "assets/videos/dumbbell-lateral-raise.mp4" },
                    { name: "Bent Over Dumbbell Rear Delt Raise", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=bent+over+dumbbell+rear+delt+raise+proper+form", video: "assets/videos/bent-over-raise.mp4" },
                    { name: "Front Plate Raise", sets: 2, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=front+plate+raise+proper+form", video: "assets/videos/front-plate-raise.mp4" },
                    { name: "Cable Face Pull", sets: 3, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=cable+face+pull+proper+form", video: "assets/videos/face-pull.mp4" }
                ]
            }
        ],
        5: [
            {
                name: "Biceps - Machine",
                exercises: [
                    { name: "Preacher Curl Machine", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=preacher+curl+machine+proper+form", video: "assets/videos/preacher-curl.mp4" },
                    { name: "Cable Curl (Straight Bar)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=cable+bicep+curl+proper+form", video: "assets/videos/cable-curl-bar.mp4" }
                ]
            },
            {
                name: "Biceps - Free Weight",
                exercises: [
                    { name: "Barbell Curl", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=barbell+bicep+curl+proper+form", video: "assets/videos/barbell-curl.mp4" },
                    { name: "Incline Dumbbell Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+dumbbell+bicep+curl+proper+form", video: "assets/videos/incline-curl.mp4" },
                    { name: "Hammer Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=hammer+curl+proper+form", video: "assets/videos/hammer-curl.mp4" }
                ]
            },
            {
                name: "Triceps - Machine/Cable",
                exercises: [
                    { name: "Tricep Pushdown (Rope)", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=tricep+rope+pushdown+proper+form", video: "assets/videos/tricep-rope.mp4" },
                    { name: "Overhead Cable Tricep Extension", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=overhead+tricep+extension+cable+proper+form", video: "assets/videos/cable-extension.mp4" }
                ]
            },
            {
                name: "Triceps - Free Weight",
                exercises: [
                    { name: "Skull Crusher (EZ Bar)", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=skull+crusher+ez+bar+proper+form", video: "assets/videos/skull-crusher.mp4" },
                    { name: "Dumbbell Overhead Tricep Extension", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+overhead+tricep+extension+proper+form", video: "assets/videos/dumbbell-extension.mp4" },
                    { name: "Bench Dips (Finisher)", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=bench+dips+proper+form", video: "assets/videos/bench-dips.mp4" }
                ]
            }
        ],
        6: [
            {
                name: "Legs - Machine",
                exercises: [
                    { name: "Leg Press Machine", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=leg+press+machine+proper+form", video: "assets/videos/leg-press.mp4" },
                    { name: "Leg Extension Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=leg+extension+machine+proper+form", video: "assets/videos/leg-extension.mp4" },
                    { name: "Seated Leg Curl Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=seated+leg+curl+machine+proper+form", video: "assets/videos/leg-curl.mp4" },
                    { name: "Standing Calf Raise Machine", sets: 4, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=standing+calf+raise+machine+proper+form", video: "assets/videos/calf-raise.mp4" }
                ]
            },
            {
                name: "Legs - Free Weight",
                exercises: [
                    { name: "Barbell Squat", sets: 4, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=barbell+squat+proper+form+for+beginners", video: "assets/videos/squat.mp4" },
                    { name: "Dumbbell Walking Lunges", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+walking+lunges+proper+form", video: "assets/videos/lunges.mp4" },
                    { name: "Romanian Deadlift (RDL)", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=romanian+deadlift+proper+form", video: "assets/videos/rdl.mp4" },
                    { name: "Bodyweight Squat (Finisher)", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=bodyweight+squat+proper+form", video: "assets/videos/bodyweight-squat.mp4" }
                ]
            }
        ],
        0: []
    },
    
    weeklyWorkouts: {
        1: {
            day: "Monday",
            title: "BACK + BICEPS",
            exercises: [
                { name: "Lat Pulldown Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=lat+pulldown+machine+proper+form", video: "assets/videos/lat-pulldown.mp4" },
                { name: "Seated Row Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=seated+row+machine+proper+form", video: "assets/videos/seated-row.mp4" },
                { name: "Assisted Pull-up Machine", sets: 3, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=assisted+pull+up+machine+proper+form", video: "assets/videos/assisted-pullup.mp4" },
                { name: "Straight Arm Pulldown", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=straight+arm+pulldown+cable+proper+form", video: "assets/videos/straight-arm-pulldown.mp4" },
                { name: "Barbell Bent Over Row", sets: 3, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=barbell+bent+over+row+proper+form", video: "assets/videos/barbell-row.mp4" },
                { name: "One Arm Dumbbell Row", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=one+arm+dumbbell+row+proper+form", video: "assets/videos/dumbbell-row.mp4" },
                { name: "Preacher Curl Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=preacher+curl+machine+proper+form", video: "assets/videos/preacher-curl.mp4" },
                { name: "Cable Curl (Bar/Rope)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=cable+bicep+curl+proper+form", video: "assets/videos/cable-curl.mp4" },
                { name: "Barbell Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=barbell+bicep+curl+proper+form", video: "assets/videos/barbell-curl.mp4" },
                { name: "Dumbbell Alternate Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+alternate+bicep+curl+proper+form", video: "assets/videos/dumbbell-curl.mp4" },
                { name: "Hammer Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=hammer+curl+proper+form", video: "assets/videos/hammer-curl.mp4" }
            ]
        },
        2: {
            day: "Tuesday",
            title: "SHOULDER + TRICEPS",
            exercises: [
                { name: "Shoulder Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=shoulder+press+machine+proper+form", video: "assets/videos/shoulder-press.mp4" },
                { name: "Lateral Raise Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=lateral+raise+machine+proper+form", video: "assets/videos/lateral-raise.mp4" },
                { name: "Rear Delt Fly Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=rear+delt+fly+machine+proper+form", video: "assets/videos/rear-delt-fly.mp4" },
                { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+shoulder+press+proper+form", video: "assets/videos/dumbbell-shoulder-press.mp4" },
                { name: "Dumbbell Side Lateral Raise", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+side+lateral+raise+proper+form", video: "assets/videos/dumbbell-lateral-raise.mp4" },
                { name: "Front Raise (Plate/Dumbbell)", sets: 2, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=front+raise+dumbbell+proper+form", video: "assets/videos/front-raise.mp4" },
                { name: "Tricep Pushdown (Cable)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=tricep+pushdown+cable+proper+form", video: "assets/videos/tricep-pushdown.mp4" },
                { name: "Overhead Tricep Extension (Cable)", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=overhead+tricep+extension+cable+proper+form", video: "assets/videos/overhead-extension.mp4" },
                { name: "Skull Crusher (EZ Bar)", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=skull+crusher+ez+bar+proper+form", video: "assets/videos/skull-crusher.mp4" },
                { name: "Dumbbell Overhead Tricep Extension", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+overhead+tricep+extension+proper+form", video: "assets/videos/dumbbell-extension.mp4" },
                { name: "Bench Dips (Bodyweight)", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=bench+dips+proper+form", video: "assets/videos/bench-dips.mp4" }
            ]
        },
        3: {
            day: "Wednesday",
            title: "CHEST + ABS",
            exercises: [
                { name: "Chest Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=chest+press+machine+proper+form", video: "assets/videos/chest-press.mp4" },
                { name: "Incline Chest Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+chest+press+machine+proper+form", video: "assets/videos/incline-press.mp4" },
                { name: "Pec Deck / Chest Fly Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=pec+deck+machine+proper+form", video: "assets/videos/pec-deck.mp4" },
                { name: "Flat Barbell Bench Press", sets: 4, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=flat+barbell+bench+press+proper+form", video: "assets/videos/bench-press.mp4" },
                { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+dumbbell+bench+press+proper+form", video: "assets/videos/incline-dumbbell-press.mp4" },
                { name: "Dumbbell Chest Fly", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+chest+fly+proper+form", video: "assets/videos/dumbbell-fly.mp4" },
                { name: "Cable Crunches", sets: 3, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=cable+crunches+proper+form", video: "assets/videos/cable-crunches.mp4" },
                { name: "Leg Raises", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=leg+raises+proper+form", video: "assets/videos/leg-raises.mp4" },
                { name: "Russian Twists", sets: 3, reps: "20-25", youtubeLink: "https://www.youtube.com/results?search_query=russian+twists+proper+form", video: "assets/videos/russian-twists.mp4" },
                { name: "Plank", sets: 3, reps: "45-60 sec", youtubeLink: "https://www.youtube.com/results?search_query=plank+proper+form", video: "assets/videos/plank.mp4" }
            ]
        },
        4: {
            day: "Thursday",
            title: "SHOULDER (LIGHT)",
            exercises: [
                { name: "Lateral Raise Machine", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=lateral+raise+machine+proper+form", video: "assets/videos/lateral-raise.mp4" },
                { name: "Rear Delt Fly Machine", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=rear+delt+fly+machine+proper+form", video: "assets/videos/rear-delt-fly.mp4" },
                { name: "Shoulder Press Machine (Light)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=shoulder+press+machine+proper+form", video: "assets/videos/shoulder-press-light.mp4" },
                { name: "Dumbbell Side Lateral Raise", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+side+lateral+raise+proper+form", video: "assets/videos/dumbbell-lateral-raise.mp4" },
                { name: "Bent Over Dumbbell Rear Delt Raise", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=bent+over+dumbbell+rear+delt+raise+proper+form", video: "assets/videos/bent-over-raise.mp4" },
                { name: "Front Plate Raise", sets: 2, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=front+plate+raise+proper+form", video: "assets/videos/front-plate-raise.mp4" },
                { name: "Cable Face Pull", sets: 3, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=cable+face+pull+proper+form", video: "assets/videos/face-pull.mp4" }
            ]
        },
        5: {
            day: "Friday",
            title: "ARMS BLAST",
            exercises: [
                { name: "Preacher Curl Machine", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=preacher+curl+machine+proper+form", video: "assets/videos/preacher-curl.mp4" },
                { name: "Cable Curl (Straight Bar)", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=cable+bicep+curl+proper+form", video: "assets/videos/cable-curl-bar.mp4" },
                { name: "Barbell Curl", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=barbell+bicep+curl+proper+form", video: "assets/videos/barbell-curl.mp4" },
                { name: "Incline Dumbbell Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+dumbbell+bicep+curl+proper+form", video: "assets/videos/incline-curl.mp4" },
                { name: "Hammer Curl", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=hammer+curl+proper+form", video: "assets/videos/hammer-curl.mp4" },
                { name: "Tricep Pushdown (Rope)", sets: 4, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=tricep+rope+pushdown+proper+form", video: "assets/videos/tricep-rope.mp4" },
                { name: "Overhead Cable Tricep Extension", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=overhead+tricep+extension+cable+proper+form", video: "assets/videos/cable-extension.mp4" },
                { name: "Skull Crusher (EZ Bar)", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=skull+crusher+ez+bar+proper+form", video: "assets/videos/skull-crusher.mp4" },
                { name: "Dumbbell Overhead Tricep Extension", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+overhead+tricep+extension+proper+form", video: "assets/videos/dumbbell-extension.mp4" },
                { name: "Bench Dips (Finisher)", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=bench+dips+proper+form", video: "assets/videos/bench-dips.mp4" }
            ]
        },
        6: {
            day: "Saturday",
            title: "LEGS",
            exercises: [
                { name: "Leg Press Machine", sets: 4, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=leg+press+machine+proper+form", video: "assets/videos/leg-press.mp4" },
                { name: "Leg Extension Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=leg+extension+machine+proper+form", video: "assets/videos/leg-extension.mp4" },
                { name: "Seated Leg Curl Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=seated+leg+curl+machine+proper+form", video: "assets/videos/leg-curl.mp4" },
                { name: "Standing Calf Raise Machine", sets: 4, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=standing+calf+raise+machine+proper+form", video: "assets/videos/calf-raise.mp4" },
                { name: "Barbell Squat", sets: 4, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=barbell+squat+proper+form+for+beginners", video: "assets/videos/squat.mp4" },
                { name: "Dumbbell Walking Lunges", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+walking+lunges+proper+form", video: "assets/videos/lunges.mp4" },
                { name: "Romanian Deadlift (RDL)", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=romanian+deadlift+proper+form", video: "assets/videos/rdl.mp4" },
                { name: "Bodyweight Squat (Finisher)", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=bodyweight+squat+proper+form", video: "assets/videos/bodyweight-squat.mp4" }
            ]
        },
        0: {
            day: "Sunday",
            title: "REST DAY",
            exercises: []
        }
    },
    
    weeklyPlan: [
        { day: "Monday", workout: "Back + Biceps", current: false, dayIndex: 1 },
        { day: "Tuesday", workout: "Shoulder + Triceps", current: false, dayIndex: 2 },
        { day: "Wednesday", workout: "Chest + ABS", current: false, dayIndex: 3 },
        { day: "Thursday", workout: "Shoulder (Light)", current: false, dayIndex: 4 },
        { day: "Friday", workout: "Arms Blast", current: false, dayIndex: 5 },
        { day: "Saturday", workout: "Legs", current: false, dayIndex: 6 },
        { day: "Sunday", workout: "Rest", current: false, dayIndex: 0 }
    ],
    
    currentExerciseIndex: 0,
    currentYoutubeLink: "",
    currentVideoLink: "",
    selectedDayForWorkout: null
};

// ✅ API Configuration
const API_BASE_URL = 'https://b-fit-backend-jy2e.onrender.com/api';

// ✅ FIXED API Service Functions
const ApiService = {
    // Set token with auto-logout timer
    setToken(token) {
        localStorage.setItem('bfitToken', token);
        localStorage.setItem('bfitLoginTime', new Date().getTime());
        this.startAutoLogoutTimer();
    },
    
    // Get token
    getToken() {
        return localStorage.getItem('bfitToken');
    },
    
    // Get login time
    getLoginTime() {
        return parseInt(localStorage.getItem('bfitLoginTime') || '0');
    },
    
    // Clear token and reset
    clearToken() {
        localStorage.removeItem('bfitToken');
        localStorage.removeItem('bfitCurrentUser');
        localStorage.removeItem('bfitUserId');
        localStorage.removeItem('bfitLoginTime');
        localStorage.removeItem('bfitCurrentPage');
        localStorage.removeItem('bfitCurrentStreak');
        localStorage.removeItem('bfitHighestStreak');
        localStorage.removeItem('bfitLastWorkoutDate');
        this.stopAutoLogoutTimer();
    },
    
    // ✅ Start auto-logout timer (5 hours)
    startAutoLogoutTimer() {
        this.stopAutoLogoutTimer();
        
        AppState.logoutTimer = setTimeout(() => {
            this.autoLogout();
        }, 5 * 60 * 60 * 1000); // 5 hours
    },
    
    // ✅ Stop auto-logout timer
    stopAutoLogoutTimer() {
        if (AppState.logoutTimer) {
            clearTimeout(AppState.logoutTimer);
            AppState.logoutTimer = null;
        }
    },
    
    // ✅ Auto logout function
    autoLogout() {
        console.log('🔄 Auto-logout after 5 hours');
        showAlert("Session Expired", "You have been automatically logged out after 5 hours. Please login again.", "info");
        
        // Clear everything
        this.clearToken();
        AppState.user = null;
        AppState.currentStreak = 0;
        AppState.highestStreak = 0;
        
        // Navigate to login page
        navigateTo('login');
    },
    
    // ✅ Check if session is expired
    checkSessionExpiry() {
        const loginTime = this.getLoginTime();
        if (!loginTime) return true;
        
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - loginTime;
        const fiveHours = 5 * 60 * 60 * 1000;
        
        if (elapsedTime >= fiveHours) {
            this.autoLogout();
            return true;
        }
        
        // Restart timer with remaining time
        const remainingTime = fiveHours - elapsedTime;
        this.stopAutoLogoutTimer();
        AppState.logoutTimer = setTimeout(() => {
            this.autoLogout();
        }, remainingTime);
        
        return false;
    },
    
    // ✅ FIXED: Make API request - with proper error handling
    async request(endpoint, method = 'GET', data = null) {
        const url = `${API_BASE_URL}${endpoint}`;
        
        console.log(`📡 API Request: ${method} ${url}`, data ? { ...data, password: data.password ? '***' : undefined } : 'No data');
        
        const headers = {
            'Content-Type': 'application/json',
        };
        
        const config = {
            method,
            headers,
            mode: 'cors',
            credentials: 'omit'
        };
        
        if (data && method !== 'GET') {
            config.body = JSON.stringify(data);
        }
        
        try {
            const response = await fetch(url, config);
            
            console.log(`📡 API Response Status: ${response.status}`);
            
            if (!response.ok) {
                let errorText = `HTTP ${response.status}`;
                try {
                    const errorData = await response.json();
                    errorText = `HTTP ${response.status}: ${JSON.stringify(errorData)}`;
                } catch (e) {
                    errorText = `HTTP ${response.status}: ${response.statusText}`;
                }
                
                console.error(`❌ API Error at ${endpoint}:`, errorText);
                throw new Error(errorText);
            }
            
            const result = await response.json();
            console.log(`✅ API Success at ${endpoint}:`, result);
            return result;
            
        } catch (error) {
            console.error(`❌ API Network Error at ${endpoint}:`, error.message);
            throw error;
        }
    },
    
    // ✅ Register - Save to MongoDB
    async register(userData) {
        try {
            console.log('📝 Registering user:', { 
                ...userData, 
                password: '***' 
            });
            
            const result = await this.request('/register', 'POST', userData);
            
            if (result.success && result.userId) {
                // Create a simple token for local storage
                const token = btoa(`${userData.phone}:${Date.now()}`);
                this.setToken(token);
                
                // ✅ Save user locally for quick access
                const userObj = {
                    _id: result.userId,
                    name: userData.name,
                    phone: userData.phone,
                    gender: userData.gender,
                    age: userData.age
                };
                
                localStorage.setItem('bfitCurrentUser', JSON.stringify(userObj));
                localStorage.setItem('bfitUserId', result.userId);
                
                console.log('✅ Registration successful:', result);
                return result;
            }
            throw new Error(result.error || 'Registration failed');
        } catch (error) {
            console.error('❌ API register failed:', error.message);
            throw error;
        }
    },
    
    // ✅ FIXED: Login - Verify from MongoDB
    async login(phone, password) {
        try {
            console.log('🔐 Logging in user:', phone);
            
            // ✅ FIXED: Clean phone number
            const cleanedPhone = phone.replace(/\D/g, '');
            
            const requestData = {
                phone: cleanedPhone,
                password: password
            };
            
            console.log('📡 Sending login data:', { ...requestData, password: '***' });
            
            const result = await this.request('/login', 'POST', requestData);
            
            if (result.success && result.userId) {
                // Create a simple token for local storage
                const token = btoa(`${cleanedPhone}:${Date.now()}`);
                this.setToken(token);
                
                // ✅ Save user locally for quick access
                const userData = {
                    _id: result.userId,
                    name: result.user?.name || 'User',
                    phone: cleanedPhone,
                    gender: result.user?.gender || '',
                    age: result.user?.age || null
                };
                
                localStorage.setItem('bfitCurrentUser', JSON.stringify(userData));
                localStorage.setItem('bfitUserId', result.userId);
                
                // Also save streak from MongoDB response
                if (result.streak) {
                    localStorage.setItem('bfitCurrentStreak', result.streak.currentStreak || 0);
                    localStorage.setItem('bfitHighestStreak', result.streak.highestStreak || 0);
                    AppState.currentStreak = result.streak.currentStreak || 0;
                    AppState.highestStreak = result.streak.highestStreak || 0;
                }
                
                console.log('✅ Login successful:', result);
                return result;
            }
            throw new Error(result.error || 'Login failed');
        } catch (error) {
            console.error('❌ API login failed:', error.message);
            throw error;
        }
    },
    
    // ✅ Update Streak - Save to MongoDB
    async updateStreak(userId) {
        try {
            console.log('📈 Updating streak in MongoDB for userId:', userId);
            
            const result = await this.request('/streak/update', 'POST', {
                userId: userId
            });
            
            console.log('✅ Streak updated in MongoDB:', result);
            return result;
        } catch (error) {
            console.error('❌ Streak update failed:', error.message);
            throw error;
        }
    },
    
    // ✅ Get Streak - Load from MongoDB
    async getStreak(userId) {
        try {
            console.log('🔍 Getting streak from MongoDB for user:', userId);
            const result = await this.request(`/streak/${userId}`, 'GET');
            
            console.log('✅ Streak loaded from MongoDB:', result);
            return result;
        } catch (error) {
            console.error('❌ Get streak failed:', error.message);
            throw error;
        }
    },
    
    // ✅ Get User by ID
    async getUserById(userId) {
        try {
            console.log('👤 Getting user by ID:', userId);
            const result = await this.request(`/user/${userId}`, 'GET');
            
            return result;
        } catch (error) {
            console.error('❌ Get user failed:', error.message);
            throw error;
        }
    },
    
    // ✅ Reset Password
    async resetPassword(phone, newPassword) {
        try {
            console.log('🔑 Resetting password for phone:', phone);
            
            const result = await this.request('/reset-password', 'POST', {
                phone: phone.replace(/\D/g, ''),
                newPassword: newPassword
            });
            
            return result;
        } catch (error) {
            console.error('❌ Reset password failed:', error.message);
            throw error;
        }
    },
    
    // ✅ Check Backend Connection
    async checkBackendConnection() {
        try {
            console.log('🔗 Testing backend connection...');
            const response = await fetch(`${API_BASE_URL}/health`);
            
            if (response.ok) {
                const data = await response.json();
                console.log('✅ Backend is reachable');
                console.log('Backend status:', data);
                return { connected: true, data: data };
            } else {
                console.log('❌ Backend not responding properly');
                return { connected: false, error: 'Backend not responding' };
            }
        } catch (error) {
            console.log('❌ Backend is offline:', error.message);
            return { connected: false, error: error.message };
        }
    },
    
    // ✅ Debug: Get all users
    async debugGetAllUsers() {
        try {
            console.log('🐛 Debug: Getting all users from backend');
            const result = await this.request('/all-data', 'GET');
            
            console.log('🐛 Debug Users:', result);
            return result;
        } catch (error) {
            console.error('🐛 Debug get users failed:', error.message);
            throw error;
        }
    }
};

// ✅ Save current page to localStorage
function saveCurrentPage(pageName) {
    localStorage.setItem('bfitCurrentPage', pageName);
}

// ✅ Load current page from localStorage
function loadCurrentPage() {
    const savedPage = localStorage.getItem('bfitCurrentPage');
    return savedPage || 'hero';
}

// DOM Elements
const pages = {
    hero: document.getElementById('heroPage'),
    loading: document.getElementById('loadingPage'),
    register: document.getElementById('registerPage'),
    login: document.getElementById('loginPage'),
    dashboard: document.getElementById('dashboardPage'),
    warmup: document.getElementById('warmupPage'),
    workoutSets: document.getElementById('workoutSetsPage'),
    workout: document.getElementById('workoutPage'),
    completion: document.getElementById('completionPage'),
    profile: document.getElementById('profilePage')
};

// ✅ Fix for countdown timer
function initializeCountdownTimer() {
    const countdownContainer = document.getElementById('countdownTimerContainer');
    if (countdownContainer) {
        countdownContainer.style.display = 'none';
        countdownContainer.classList.remove('active');
    }
}

// Alert Modal Functions
function showAlert(title, message, icon = "info") {
    const alertModal = document.getElementById('alertModal');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const alertIcon = document.getElementById('alertIcon');
    
    if (!alertModal || !alertTitle || !alertMessage || !alertIcon) {
        console.error('Alert modal elements not found');
        alert(title + ': ' + message);
        return;
    }
    
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    
    switch(icon) {
        case "success":
            alertIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
            alertIcon.style.color = '#4CAF50';
            break;
        case "error":
            alertIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            alertIcon.style.color = '#f44336';
            break;
        case "warning":
            alertIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            alertIcon.style.color = '#FF9800';
            break;
        default:
            alertIcon.innerHTML = '<i class="fas fa-info-circle"></i>';
            alertIcon.style.color = '#2196F3';
    }
    
    alertModal.classList.add('active');
}

function hideAlert() {
    const alertModal = document.getElementById('alertModal');
    if (alertModal) {
        alertModal.classList.remove('active');
    }
}

// ✅ IMPROVED: Navigation Functions with page persistence
function navigateTo(pageName) {
    if (AppState.currentPage === pageName) {
        return;
    }
    
    const currentPage = pages[AppState.currentPage];
    const nextPage = pages[pageName];
    
    if (!nextPage) {
        console.error('Page not found:', pageName);
        showAlert("Navigation Error", `Page "${pageName}" not found`, "error");
        return;
    }
    
    if (currentPage) {
        currentPage.classList.remove('active');
        currentPage.classList.add('previous');
    }
    
    nextPage.classList.remove('next', 'previous');
    nextPage.classList.add('active');
    
    Object.keys(pages).forEach(key => {
        if (key !== pageName && key !== AppState.currentPage) {
            const page = pages[key];
            page.classList.remove('active', 'previous');
            page.classList.add('next');
        }
    });
    
    AppState.currentPage = pageName;
    
    // ✅ Save current page to localStorage
    saveCurrentPage(pageName);
    
    updateHamburgerVisibility();
    updateBackButtonVisibility();
    
    initializePage(pageName);
}

function updateHamburgerVisibility() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (!hamburgerBtn) return;
    
    if (AppState.currentPage === 'dashboard' || AppState.currentPage === 'profile' || 
        AppState.currentPage === 'warmup' || AppState.currentPage === 'workoutSets' || 
        AppState.currentPage === 'workout' || AppState.currentPage === 'completion') {
        hamburgerBtn.style.display = 'block';
    } else {
        hamburgerBtn.style.display = 'none';
        closeSidebar();
    }
}

function updateBackButtonVisibility() {
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(btn => {
        if (!btn) return;
        
        if (AppState.currentPage === 'warmup' || AppState.currentPage === 'workoutSets' || 
            AppState.currentPage === 'workout' || AppState.currentPage === 'profile') {
            btn.style.visibility = 'visible';
        } else {
            btn.style.visibility = 'hidden';
        }
    });
}

function initializePage(pageName) {
    console.log(`Initializing page: ${pageName}`);
    
    switch(pageName) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'warmup':
            loadWarmupExercises();
            break;
        case 'workoutSets':
            loadWorkoutSetsPage();
            break;
        case 'workout':
            loadWorkoutExercise();
            break;
        case 'completion':
            updateCompletionPage();
            break;
        case 'profile':
            loadProfilePage();
            break;
        case 'login':
            // Clear login form
            const loginForm = document.getElementById('loginForm');
            if (loginForm) loginForm.reset();
            break;
        case 'register':
            // Clear register form
            const registerForm = document.getElementById('registerForm');
            if (registerForm) registerForm.reset();
            break;
    }
}

// Time Functions
function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const homeDayElement = document.getElementById('homeDay');
    if (homeDayElement) {
        AppState.currentDay = now.getDay();
        homeDayElement.textContent = days[now.getDay()];
    }
}

// ✅ IMPROVED: Dashboard Functions
async function updateDashboard() {
    try {
        console.log('Updating dashboard...');
        
        // Load from local storage first
        loadFromLocalStorage();
        
        // Check session expiry
        if (AppState.user) {
            ApiService.checkSessionExpiry();
        }
        
        // ✅ Update streak from MongoDB if possible
        await updateStreakFromMongoDB();
        
        // Load weekly plan for sidebar
        loadWeeklyPlan();
        
        // Update today's workout
        updateTodaysWorkout();
        
        // Update day
        updateDateTime();
        
        // Update workout image
        updateWorkoutImage();
        
        // Update welcome message
        updateWelcomeMessage();
        
    } catch (error) {
        console.error('Dashboard update error:', error);
        // Fallback
        loadFromLocalStorage();
        updateTodaysWorkout();
        updateDateTime();
        updateWorkoutImage();
        updateWelcomeMessage();
    }
}

function loadFromLocalStorage() {
    // Load streaks from localStorage
    const savedCurrentStreak = localStorage.getItem('bfitCurrentStreak');
    const savedHighestStreak = localStorage.getItem('bfitHighestStreak');
    const savedLastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
    
    if (savedCurrentStreak) {
        AppState.currentStreak = parseInt(savedCurrentStreak);
        const currentStreakElement = document.getElementById('currentStreakCount');
        if (currentStreakElement) {
            currentStreakElement.textContent = AppState.currentStreak;
        }
    }
    
    if (savedHighestStreak) {
        AppState.highestStreak = parseInt(savedHighestStreak);
    }
    
    if (savedLastWorkoutDate) {
        AppState.lastWorkoutDate = savedLastWorkoutDate;
    }
    
    // Load current user if exists
    try {
        const savedUser = localStorage.getItem('bfitCurrentUser');
        if (savedUser) {
            AppState.user = JSON.parse(savedUser);
            
            // Update sidebar
            const sidebarName = document.getElementById('sidebarUserName');
            const sidebarPhone = document.getElementById('sidebarUserPhone');
            if (sidebarName) sidebarName.textContent = AppState.user.name || 'User';
            if (sidebarPhone) sidebarPhone.textContent = AppState.user.phone || 'N/A';
        }
    } catch (e) {
        console.log('Error parsing user from localStorage:', e);
    }
}

function updateWelcomeMessage() {
    const welcomeElement = document.getElementById('welcomeUser');
    if (welcomeElement && AppState.user && AppState.user.name) {
        welcomeElement.textContent = `Welcome, ${AppState.user.name}!`;
    } else if (welcomeElement) {
        welcomeElement.textContent = 'Welcome!';
    }
}

// ✅ Get streak from MongoDB
async function updateStreakFromMongoDB() {
    try {
        const userId = localStorage.getItem('bfitUserId');
        if (!userId) {
            console.log('No userId found in localStorage');
            return;
        }
        
        console.log('🔍 Getting streak from MongoDB for userId:', userId);
        const result = await ApiService.getStreak(userId);
        
        if (result && result.streak) {
            AppState.currentStreak = result.streak.currentStreak || 0;
            AppState.highestStreak = result.streak.highestStreak || 0;
            
            // Update display
            const currentStreakElement = document.getElementById('currentStreakCount');
            if (currentStreakElement) {
                currentStreakElement.textContent = AppState.currentStreak;
            }
            
            // Save to localStorage for offline use
            localStorage.setItem('bfitCurrentStreak', AppState.currentStreak);
            localStorage.setItem('bfitHighestStreak', AppState.highestStreak);
            
            console.log('✅ Streak loaded from MongoDB:', result.streak);
        } else {
            console.log('No streak data returned from MongoDB');
        }
    } catch (error) {
        console.log('Could not load streak from MongoDB:', error.message);
    }
}

function updateTodaysWorkout() {
    const workoutTitle = document.getElementById('todayWorkout');
    const todayWorkout = AppState.weeklyWorkouts[AppState.currentDay];
    
    if (workoutTitle) {
        if (todayWorkout && todayWorkout.title) {
            workoutTitle.textContent = todayWorkout.title;
            AppState.currentWorkoutDay = AppState.currentDay;
        } else {
            workoutTitle.textContent = "REST DAY";
            AppState.currentWorkoutDay = 0;
        }
    }
}

function updateWorkoutImage() {
    const imageContainer = document.getElementById('workoutImageContainer');
    const imageText = document.getElementById('workoutImageText');
    
    if (!imageContainer || !imageText) return;
    
    const workout = AppState.weeklyWorkouts[AppState.currentWorkoutDay];
    
    if (workout && workout.title) {
        imageText.textContent = workout.title;
        const imagePath = AppState.workoutImages[AppState.currentWorkoutDay] || "assets/images/saturday.jpg";
        imageContainer.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${imagePath}')`;
        imageContainer.style.backgroundSize = 'cover';
        imageContainer.style.backgroundPosition = 'center';
    } else {
        imageText.textContent = "REST DAY";
        imageContainer.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/images/sunday.jpg')`;
        imageContainer.style.backgroundSize = 'cover';
        imageContainer.style.backgroundPosition = 'center';
    }
}

function loadWarmupExercises() {
    const warmupExercisesContainer = document.getElementById('warmupExercises');
    if (!warmupExercisesContainer) return;
    
    warmupExercisesContainer.innerHTML = '';
    
    AppState.warmupExercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'warmup-exercise';
        exerciseDiv.innerHTML = `
            <div class="warmup-exercise-header">
                <div class="warmup-name">${index + 1}. ${exercise.name}</div>
                <div class="warmup-duration">${exercise.duration}</div>
            </div>
            <div class="warmup-description">
                ${exercise.description}
            </div>
            <a href="${exercise.youtubeLink}" target="_blank" class="youtube-link">
                <i class="fab fa-youtube"></i> Watch Tutorial
            </a>
        `;
        warmupExercisesContainer.appendChild(exerciseDiv);
    });
}

function loadWeeklyPlan() {
    const weeklyPlanContainer = document.getElementById('weeklyPlan');
    if (!weeklyPlanContainer) return;
    
    weeklyPlanContainer.innerHTML = '';
    
    AppState.weeklyPlan.forEach(dayPlan => {
        dayPlan.current = (dayPlan.dayIndex === AppState.currentDay);
    });
    
    AppState.weeklyPlan.forEach(dayPlan => {
        const dayItem = document.createElement('div');
        dayItem.className = 'day-item';
        dayItem.dataset.dayIndex = dayPlan.dayIndex;
        
        if (dayPlan.current) {
            dayItem.classList.add('current-day');
        }
        dayItem.innerHTML = `
            <div>${dayPlan.day}</div>
            <div>${dayPlan.workout}</div>
        `;
        
        dayItem.addEventListener('click', function() {
            const dayIndex = parseInt(this.dataset.dayIndex);
            startWorkoutForDay(dayIndex);
            closeSidebar();
        });
        
        weeklyPlanContainer.appendChild(dayItem);
    });
}

function startWorkoutForDay(dayIndex) {
    if (dayIndex === 0) {
        showAlert("Rest Day", "Today is rest day! No workout scheduled. Take this day to recover and rejuvenate.", "info");
        return;
    }
    
    const workout = AppState.weeklyWorkouts[dayIndex];
    if (!workout || workout.exercises.length === 0) {
        showAlert("No Workout", "No workout found for this day!", "warning");
        return;
    }
    
    AppState.selectedDayForWorkout = dayIndex;
    AppState.currentWorkoutDay = dayIndex;
    
    navigateTo('workoutSets');
}

// Workout Sets Page Functions
function loadWorkoutSetsPage() {
    const dayToLoad = AppState.selectedDayForWorkout !== null ? AppState.selectedDayForWorkout : AppState.currentWorkoutDay;
    const workout = AppState.weeklyWorkouts[dayToLoad];
    const sets = AppState.workoutSets[dayToLoad];
    
    if (!workout || !sets || sets.length === 0) {
        showAlert("No Workout Sets", "No workout sets found for this day!", "warning");
        navigateTo('dashboard');
        return;
    }
    
    const workoutSetsTitle = document.getElementById('workoutSetsTitle');
    const workoutDayTitle = document.getElementById('workoutDayTitle');
    
    if (workoutSetsTitle) workoutSetsTitle.textContent = workout.day.toUpperCase();
    if (workoutDayTitle) workoutDayTitle.textContent = workout.title;
    
    const setsGrid = document.getElementById('workoutSetsGrid');
    if (!setsGrid) return;
    
    setsGrid.innerHTML = '';
    
    sets.forEach((set, index) => {
        const setCard = document.createElement('div');
        setCard.className = 'set-card';
        
        let exercisesHTML = '';
        set.exercises.forEach(exercise => {
            exercisesHTML += `
                <div class="exercise-item">
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-sets">${exercise.sets} × ${exercise.reps}</div>
                </div>
            `;
        });
        
        setCard.innerHTML = `
            <div class="set-name">${set.name}</div>
            <div class="set-exercises">
                ${exercisesHTML}
            </div>
        `;
        
        setsGrid.appendChild(setCard);
    });
}

// Workout Functions
function loadWorkoutExercise() {
    const dayToLoad = AppState.selectedDayForWorkout !== null ? AppState.selectedDayForWorkout : AppState.currentWorkoutDay;
    const workout = AppState.weeklyWorkouts[dayToLoad];
    
    if (!workout || workout.exercises.length === 0) {
        showAlert("No Exercises", "No exercises found for today's workout!", "warning");
        navigateTo('dashboard');
        return;
    }
    
    const exercise = workout.exercises[AppState.currentExerciseIndex];
    
    // Update exercise details
    const currentExerciseName = document.getElementById('currentExerciseName');
    const currentExerciseDetails = document.getElementById('currentExerciseDetails');
    const currentExerciseIndex = document.getElementById('currentExerciseIndex');
    const totalExercises = document.getElementById('totalExercises');
    const workoutPageTitle = document.getElementById('workoutPageTitle');
    
    if (currentExerciseName) currentExerciseName.textContent = exercise.name.toUpperCase();
    if (currentExerciseDetails) currentExerciseDetails.textContent = `${exercise.sets} × ${exercise.reps}`;
    if (currentExerciseIndex) currentExerciseIndex.textContent = AppState.currentExerciseIndex + 1;
    if (totalExercises) totalExercises.textContent = workout.exercises.length;
    if (workoutPageTitle) workoutPageTitle.textContent = workout.day.toUpperCase();
    
    AppState.currentYoutubeLink = exercise.youtubeLink;
    AppState.currentVideoLink = exercise.video || AppState.workoutVideos[exercise.name];
    
    const videoContainer = document.getElementById('exerciseVideoContainer');
    if (!videoContainer) return;
    
    // Clear video container
    videoContainer.innerHTML = '';
    
    if (AppState.currentVideoLink) {
        const video = document.createElement('video');
        video.id = 'exerciseVideo';
        video.controls = true;
        video.preload = 'metadata';
        video.style.width = '100%';
        video.style.borderRadius = '10px';
        
        const source = document.createElement('source');
        source.src = AppState.currentVideoLink;
        source.type = 'video/mp4';
        
        video.appendChild(source);
        videoContainer.appendChild(video);
        
        // Add fallback for unsupported videos
        const fallbackText = document.createElement('p');
        fallbackText.textContent = 'Your browser does not support the video tag.';
        fallbackText.style.color = '#fff';
        fallbackText.style.textAlign = 'center';
        fallbackText.style.padding = '20px';
        video.appendChild(fallbackText);
        
        // Try to play video
        video.load();
        video.play().catch(e => {
            console.log("Video autoplay prevented:", e);
            
            // Create play button overlay
            videoContainer.innerHTML = `
                <div class="video-placeholder" id="videoPlaceholder" style="
                    width: 100%;
                    height: 300px;
                    background: rgba(0,0,0,0.7);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                ">
                    <i class="fas fa-play-circle" style="font-size: 80px; color: #FFD700; margin-bottom: 20px;"></i>
                    <p style="color: white; font-size: 18px;">Click to play exercise video</p>
                    <p style="color: #ccc; font-size: 14px; margin-top: 10px;">${exercise.name}</p>
                </div>
                <video id="exerciseVideo" style="display: none; width: 100%; border-radius: 10px;">
                    <source src="${AppState.currentVideoLink}" type="video/mp4">
                </video>
            `;
            
            document.getElementById('videoPlaceholder').addEventListener('click', function() {
                this.style.display = 'none';
                const hiddenVideo = document.getElementById('exerciseVideo');
                if (hiddenVideo) {
                    hiddenVideo.style.display = 'block';
                    hiddenVideo.play();
                }
            });
        });
    } else {
        videoContainer.innerHTML = `
            <div class="video-placeholder" style="
                width: 100%;
                height: 300px;
                background: rgba(0,0,0,0.7);
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            ">
                <i class="fas fa-play-circle" style="font-size: 80px; color: #666; margin-bottom: 20px;"></i>
                <p style="color: white; font-size: 18px;">Video not available for this exercise</p>
                <p style="color: #ccc; font-size: 14px; margin-top: 10px;">${exercise.name}</p>
            </div>
        `;
    }
}

function startCountdown() {
    const countdownContainer = document.getElementById('countdownTimerContainer');
    const countdownDisplay = document.getElementById('countdownTimerDisplay');
    
    if (!countdownContainer || !countdownDisplay) return;
    
    countdownContainer.style.display = 'flex';
    countdownContainer.classList.add('active');
    
    let timeLeft = 60;
    countdownDisplay.textContent = timeLeft;
    
    // Clear any existing interval
    if (AppState.countdownInterval) {
        clearInterval(AppState.countdownInterval);
    }
    
    AppState.countdownInterval = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(AppState.countdownInterval);
            AppState.countdownInterval = null;
            countdownContainer.classList.remove('active');
            countdownContainer.style.display = 'none';
            
            const dayToLoad = AppState.selectedDayForWorkout !== null ? AppState.selectedDayForWorkout : AppState.currentWorkoutDay;
            const workout = AppState.weeklyWorkouts[dayToLoad];
            AppState.currentExerciseIndex++;
            
            if (AppState.currentExerciseIndex < workout.exercises.length) {
                loadWorkoutExercise();
            } else {
                AppState.currentExerciseIndex = 0;
                updateStreak();
                navigateTo('completion');
            }
        }
    }, 1000);
}

// ✅ Check if already worked out today
function hasWorkedOutToday() {
    const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
    if (!lastWorkoutDate) return false;
    
    const today = new Date().toDateString();
    const lastDate = new Date(lastWorkoutDate).toDateString();
    
    return today === lastDate;
}

// ✅ FIXED: Update Streak Function - Save to MongoDB
async function updateStreak() {
    try {
        const now = new Date();
        const today = now.toDateString();
        
        // ✅ Check if already worked out today
        if (hasWorkedOutToday()) {
            console.log('Already worked out today - no streak update');
            showAlert("Already Completed", "You have already completed your workout today!", "info");
            return;
        }
        
        // ✅ Check for Sunday (0 = Sunday)
        if (now.getDay() === 0) {
            console.log('Sunday - no streak update');
            showAlert("Rest Day", "Sunday is rest day! No streak update.", "info");
            return;
        }
        
        // Calculate streak
        const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
        let currentStreak = parseInt(localStorage.getItem('bfitCurrentStreak') || '0');
        let highestStreak = parseInt(localStorage.getItem('bfitHighestStreak') || '0');
        
        if (!lastWorkoutDate) {
            // First workout ever
            currentStreak = 1;
            console.log('First workout - streak: 1');
        } else {
            const lastDate = new Date(lastWorkoutDate);
            const diffTime = Math.abs(now - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            console.log(`Days since last workout: ${diffDays}`);
            
            if (diffDays === 1) {
                // Worked out yesterday
                currentStreak++;
                console.log('Streak continued:', currentStreak);
            } else if (diffDays > 1) {
                // Missed days
                currentStreak = 1;
                console.log('Missed days - streak reset to 1');
            }
        }
        
        // Update highest streak
        if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
            console.log('New highest streak:', highestStreak);
        }
        
        // ✅ Save to localStorage for display
        localStorage.setItem('bfitCurrentStreak', currentStreak);
        localStorage.setItem('bfitHighestStreak', highestStreak);
        localStorage.setItem('bfitLastWorkoutDate', today);
        
        // Update AppState
        AppState.currentStreak = currentStreak;
        AppState.highestStreak = highestStreak;
        
        // Update UI
        const currentStreakElement = document.getElementById('currentStreakCount');
        if (currentStreakElement) {
            currentStreakElement.textContent = currentStreak;
        }
        
        // ✅ Save to MongoDB
        const userId = localStorage.getItem('bfitUserId');
        
        if (userId) {
            try {
                await ApiService.updateStreak(userId);
                
                console.log('✅ Streak saved to MongoDB');
                showAlert("Great Job!", `Your streak is now ${currentStreak} days! (Saved to Database)`, "success");
                
            } catch (mongoError) {
                console.log('❌ MongoDB save failed, but streak saved locally:', mongoError.message);
                showAlert("Great Job!", `Your streak is now ${currentStreak} days! (Saved Locally)`, "warning");
            }
        } else {
            showAlert("Great Job!", `Your streak is now ${currentStreak} days! (Saved Locally)`, "success");
        }
        
    } catch (error) {
        console.error('Streak update failed:', error);
        
        // Fallback
        const currentStreak = parseInt(localStorage.getItem('bfitCurrentStreak') || '0') + 1;
        localStorage.setItem('bfitCurrentStreak', currentStreak);
        localStorage.setItem('bfitLastWorkoutDate', new Date().toDateString());
        
        AppState.currentStreak = currentStreak;
        
        const currentStreakElement = document.getElementById('currentStreakCount');
        if (currentStreakElement) {
            currentStreakElement.textContent = currentStreak;
        }
        
        showAlert("Great Job!", `Your streak is now ${currentStreak} days! (Saved Locally)`, "success");
    }
}

function updateCompletionPage() {
    const updatedStreakElement = document.getElementById('updatedStreak');
    if (updatedStreakElement) {
        updatedStreakElement.textContent = AppState.currentStreak;
    }
}

// ✅ Profile Functions - Save to localStorage
async function loadProfilePage() {
    try {
        // Load from local storage
        const savedUser = localStorage.getItem('bfitCurrentUser');
        
        if (savedUser) {
            AppState.user = JSON.parse(savedUser);
            
            const profileUserName = document.getElementById('profileUserName');
            const profileUserPhone = document.getElementById('profileUserPhone');
            const profileName = document.getElementById('profileName');
            const profilePhone = document.getElementById('profilePhone');
            const profileAge = document.getElementById('profileAge');
            const profileGender = document.getElementById('profileGender');
            
            if (profileUserName) profileUserName.textContent = AppState.user.name || 'User';
            if (profileUserPhone) profileUserPhone.textContent = AppState.user.phone || 'N/A';
            if (profileName) profileName.value = AppState.user.name || '';
            if (profilePhone) profilePhone.value = AppState.user.phone || '';
            if (profileAge) profileAge.value = AppState.user.age || '';
            if (profileGender) profileGender.value = AppState.user.gender || '';
        }
        
        // Update streak stats
        const profileCurrentStreak = document.getElementById('profileCurrentStreak');
        const profileHighestStreak = document.getElementById('profileHighestStreak');
        
        if (profileCurrentStreak) profileCurrentStreak.textContent = AppState.currentStreak;
        if (profileHighestStreak) profileHighestStreak.textContent = AppState.highestStreak;
        
    } catch (error) {
        console.error('Profile load error:', error);
    }
}

// ✅ Profile save - Save to localStorage
async function saveProfileData() {
    try {
        const profileName = document.getElementById('profileName');
        const profileAge = document.getElementById('profileAge');
        const profileGender = document.getElementById('profileGender');
        
        if (!profileName || !profileAge || !profileGender) {
            showAlert("Validation Error", "Profile form elements not found", "error");
            return;
        }
        
        const profileData = {
            name: profileName.value.trim(),
            age: profileAge.value.trim(),
            gender: profileGender.value
        };
        
        if (!profileData.name) {
            showAlert("Validation Error", "Name is required", "error");
            return;
        }
        
        // ✅ Save to localStorage ONLY
        const currentUser = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
        const updatedUser = { 
            ...currentUser, 
            ...profileData,
            phone: currentUser.phone || ''
        };
        
        localStorage.setItem('bfitCurrentUser', JSON.stringify(updatedUser));
        
        // ✅ Update AppState
        AppState.user = updatedUser;
        
        // ✅ Update sidebar
        const sidebarName = document.getElementById('sidebarUserName');
        const sidebarPhone = document.getElementById('sidebarUserPhone');
        if (sidebarName) sidebarName.textContent = updatedUser.name;
        if (sidebarPhone) sidebarPhone.textContent = updatedUser.phone || 'N/A';
        
        showAlert("Profile Saved", "Your profile has been saved locally!", "success");
        
    } catch (error) {
        console.error('Save profile error:', error);
        showAlert("Save Failed", "Could not save profile. Please try again.", "error");
    }
}

// Sidebar Functions
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebar) sidebar.classList.add('sidebar-open');
    if (sidebarOverlay) sidebarOverlay.style.display = 'block';
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebar) sidebar.classList.remove('sidebar-open');
    if (sidebarOverlay) sidebarOverlay.style.display = 'none';
}

// Password Toggle Functionality
function initializePasswordToggles() {
    // Login password toggle
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const loginPassword = document.getElementById('loginPassword');
    
    if (toggleLoginPassword && loginPassword) {
        toggleLoginPassword.addEventListener('click', function() {
            const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            loginPassword.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    // Register password toggle
    const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
    const registerPassword = document.getElementById('registerPassword');
    
    if (toggleRegisterPassword && registerPassword) {
        toggleRegisterPassword.addEventListener('click', function() {
            const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            registerPassword.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    // Confirm password toggle
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPassword = document.getElementById('registerConfirmPassword');
    
    if (toggleConfirmPassword && confirmPassword) {
        toggleConfirmPassword.addEventListener('click', function() {
            const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPassword.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
}

// ✅ Debug Function: Check Database Status
async function debugDatabaseStatus() {
    console.log('🐛 Debug: Checking database status...');
    try {
        const response = await fetch(`${API_BASE_URL}/debug/users`);
        const data = await response.json();
        console.log('🐛 Database Users:', data);
        return data;
    } catch (error) {
        console.error('🐛 Debug error:', error);
        return null;
    }
}

// ✅ FIXED: Event Listeners - COMPLETE SETUP
document.addEventListener('DOMContentLoaded', function() {
    console.log('B-FIT App Initializing...');
    
    // Initialize countdown timer
    initializeCountdownTimer();
    
    // Initialize password toggles
    initializePasswordToggles();
    
    // Update day initially
    updateDateTime();
    
    // Load saved streaks (for display only)
    const savedCurrentStreak = localStorage.getItem('bfitCurrentStreak');
    const savedHighestStreak = localStorage.getItem('bfitHighestStreak');
    
    if (savedCurrentStreak) {
        AppState.currentStreak = parseInt(savedCurrentStreak);
        const currentStreakElement = document.getElementById('currentStreakCount');
        if (currentStreakElement) {
            currentStreakElement.textContent = AppState.currentStreak;
        }
    }
    
    if (savedHighestStreak) {
        AppState.highestStreak = parseInt(savedHighestStreak);
    }
    
    // Initially hide hamburger button
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.style.display = 'none';
    }
    
    // Alert Modal
    const alertButton = document.getElementById('alertButton');
    const alertModal = document.getElementById('alertModal');
    
    if (alertButton) {
        alertButton.addEventListener('click', hideAlert);
    }
    
    if (alertModal) {
        alertModal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideAlert();
            }
        });
    }
    
    // ✅ FIXED: Hero Page - Check login status and navigate to saved page
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            const currentUser = localStorage.getItem('bfitCurrentUser');
            if (currentUser) {
                const savedPage = loadCurrentPage();
                if (savedPage !== 'hero' && savedPage !== 'login' && savedPage !== 'register') {
                    navigateTo(savedPage);
                } else {
                    navigateTo('dashboard');
                }
            } else {
                navigateTo('login');
            }
        });
    }
    
    // ✅ Auto-navigate to saved page on load
    setTimeout(() => {
        const currentUser = localStorage.getItem('bfitCurrentUser');
        const userId = localStorage.getItem('bfitUserId');
        
        console.log('Auto-navigation check:', {
            currentUser: !!currentUser,
            userId: userId,
            currentPage: AppState.currentPage
        });
        
        if (currentUser && userId) {
            console.log('✅ User already logged in');
            
            // Check session expiry
            if (!ApiService.checkSessionExpiry()) {
                // Navigate to saved page or dashboard
                const savedPage = loadCurrentPage();
                console.log('Saved page:', savedPage);
                
                // Don't navigate to login/register/hero if logged in
                if (savedPage !== 'hero' && savedPage !== 'login' && savedPage !== 'register') {
                    if (savedPage !== AppState.currentPage) {
                        navigateTo(savedPage);
                    }
                } else if (AppState.currentPage === 'hero') {
                    navigateTo('dashboard');
                }
            }
        }
    }, 1500);
    
    // ✅ FIXED: Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const registerName = document.getElementById('registerName');
            const registerPhone = document.getElementById('registerPhone');
            const registerGender = document.getElementById('registerGender');
            const registerAge = document.getElementById('registerAge');
            const registerPassword = document.getElementById('registerPassword');
            const registerConfirmPassword = document.getElementById('registerConfirmPassword');
            
            if (!registerName || !registerPhone || !registerGender || !registerPassword || !registerConfirmPassword) {
                showAlert("Form Error", "Registration form elements not found", "error");
                return;
            }
            
            const name = registerName.value.trim();
            let phone = registerPhone.value.trim();
            const gender = registerGender.value;
            const age = registerAge.value.trim();
            const password = registerPassword.value;
            const confirmPassword = registerConfirmPassword.value;
            
            // Validation
            if (name.length < 2) {
                showAlert("Validation Error", "Name must be at least 2 characters long", "warning");
                return;
            }
            
            // Clean phone number (remove all non-digits)
            const cleanedPhone = phone.replace(/\D/g, '');
            
            if (cleanedPhone.length !== 10) {
                showAlert("Validation Error", "Please enter a valid 10-digit phone number", "warning");
                return;
            }
            
            if (!gender) {
                showAlert("Validation Error", "Please select your gender", "warning");
                return;
            }
            
            if (password.length < 6) {
                showAlert("Validation Error", "Password must be at least 6 characters long", "warning");
                return;
            }
            
            if (password !== confirmPassword) {
                showAlert("Validation Error", "Passwords do not match", "warning");
                return;
            }
            
            // Show loading
            showAlert("Registering", "Creating your account...", "info");
            
            try {
                const userData = { 
                    name, 
                    phone: cleanedPhone,
                    password, 
                    gender, 
                    age: age || null 
                };
                
                // ✅ Register in MongoDB
                const result = await ApiService.register(userData);
                
                hideAlert();
                showAlert("Success", "Account created successfully!", "success");
                
                // Update AppState
                AppState.user = result.user;
                
                // Navigate to dashboard
                setTimeout(() => {
                    hideAlert();
                    navigateTo('loading');
                    setTimeout(() => {
                        navigateTo('dashboard');
                    }, 1500);
                }, 1500);
                
            } catch (error) {
                console.error('Registration error:', error);
                hideAlert();
                showAlert("Registration Failed", error.message || "Could not create account. Please try again.", "error");
            }
        });
    }
    
    // ✅ FIXED: Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const loginPhone = document.getElementById('loginPhone');
            const loginPassword = document.getElementById('loginPassword');
            
            if (!loginPhone || !loginPassword) {
                showAlert("Form Error", "Login form elements not found", "error");
                return;
            }
            
            // Get and clean phone number
            let phone = loginPhone.value.trim();
            
            // Remove all non-digits (spaces, dashes, plus signs)
            phone = phone.replace(/\D/g, '');
            
            const password = loginPassword.value;
            
            console.log('🔐 Login attempt with:', {
                phone: phone,
                passwordLength: password.length
            });
            
            if (phone.length !== 10) {
                showAlert("Validation Error", "Please enter a valid 10-digit phone number", "warning");
                return;
            }
            
            if (!password || password.length < 6) {
                showAlert("Validation Error", "Please enter your password (min 6 characters)", "warning");
                return;
            }
            
            // Show loading
            showAlert("Logging In", "Please wait...", "info");
            
            try {
                // ✅ FIXED: Login from MongoDB
                const result = await ApiService.login(phone, password);
                
                hideAlert();
                showAlert("Success", "Login successful!", "success");
                
                // Update AppState
                AppState.user = result.user;
                
                // Load streak from MongoDB
                await updateStreakFromMongoDB();
                
                // Navigate to dashboard
                setTimeout(() => {
                    hideAlert();
                    navigateTo('loading');
                    setTimeout(() => {
                        navigateTo('dashboard');
                    }, 1500);
                }, 1500);
                
            } catch (error) {
                console.error('❌ Login error:', error);
                hideAlert();
                
                // Show detailed error message
                let errorMessage = "Invalid phone number or password. Please check your credentials.";
                if (error.message.includes("NetworkError") || error.message.includes("Failed to fetch")) {
                    errorMessage = "Network error. Please check your internet connection and try again.";
                } else if (error.message.includes("500")) {
                    errorMessage = "Server error. Please try again later.";
                }
                
                showAlert("Login Failed", errorMessage, "error");
            }
        });
    }
    
    // Auth navigation links
    const goToLoginLink = document.getElementById('goToLoginLink');
    if (goToLoginLink) {
        goToLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo('login');
        });
    }
    
    const goToRegisterLink = document.getElementById('goToRegisterLink');
    if (goToRegisterLink) {
        goToRegisterLink.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo('register');
        });
    }
    
    // Dashboard
    const startWorkoutBtn = document.getElementById('startWorkoutBtn');
    if (startWorkoutBtn) {
        startWorkoutBtn.addEventListener('click', function() {
            AppState.selectedDayForWorkout = null;
            
            if (AppState.currentWorkoutDay === 0) {
                showAlert("Rest Day", "Today is rest day! No workout scheduled. Take this day to recover and rejuvenate.", "info");
                return;
            }
            navigateTo('warmup');
        });
    }
    
    // Warmup Page
    const backToDashboardBtn = document.getElementById('backToDashboardBtn');
    if (backToDashboardBtn) {
        backToDashboardBtn.addEventListener('click', function() {
            navigateTo('dashboard');
        });
    }
    
    const startMainWorkoutBtn = document.getElementById('startMainWorkoutBtn');
    if (startMainWorkoutBtn) {
        startMainWorkoutBtn.addEventListener('click', function() {
            AppState.currentExerciseIndex = 0;
            navigateTo('workout');
        });
    }
    
    // Workout Sets Page
    const backToDashboardFromSetsBtn = document.getElementById('backToDashboardFromSetsBtn');
    if (backToDashboardFromSetsBtn) {
        backToDashboardFromSetsBtn.addEventListener('click', function() {
            navigateTo('dashboard');
        });
    }
    
    const startWorkoutFromSetsBtn = document.getElementById('startWorkoutFromSetsBtn');
    if (startWorkoutFromSetsBtn) {
        startWorkoutFromSetsBtn.addEventListener('click', function() {
            navigateTo('warmup');
        });
    }
    
    // Workout Page
    const backToSetsBtn = document.getElementById('backToSetsBtn');
    if (backToSetsBtn) {
        backToSetsBtn.addEventListener('click', function() {
            navigateTo('workoutSets');
        });
    }
    
    const doneExerciseBtn = document.getElementById('doneExerciseBtn');
    if (doneExerciseBtn) {
        doneExerciseBtn.addEventListener('click', startCountdown);
    }
    
    // YouTube Link Button
    const youtubeLinkBtn = document.getElementById('youtubeLinkBtn');
    if (youtubeLinkBtn) {
        youtubeLinkBtn.addEventListener('click', function() {
            if (AppState.currentYoutubeLink) {
                window.open(AppState.currentYoutubeLink, '_blank');
            } else {
                showAlert("No Tutorial", "No tutorial link available for this exercise.", "info");
            }
        });
    }
    
    // Completion Page
    const goToDashboardFromCompletionBtn = document.getElementById('goToDashboardFromCompletionBtn');
    if (goToDashboardFromCompletionBtn) {
        goToDashboardFromCompletionBtn.addEventListener('click', function() {
            AppState.selectedDayForWorkout = null;
            navigateTo('dashboard');
        });
    }
    
    // Profile Page
    const backToDashboardFromProfileBtn = document.getElementById('backToDashboardFromProfileBtn');
    if (backToDashboardFromProfileBtn) {
        backToDashboardFromProfileBtn.addEventListener('click', function() {
            navigateTo('dashboard');
        });
    }
    
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveProfileData();
        });
    }
    
    // Sidebar Controls
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openSidebar);
    }
    
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Sidebar Menu Items
    const sidebarHomeBtn = document.getElementById('sidebarHomeBtn');
    if (sidebarHomeBtn) {
        sidebarHomeBtn.addEventListener('click', function() {
            navigateTo('dashboard');
            closeSidebar();
        });
    }
    
    const sidebarProfileBtn = document.getElementById('sidebarProfileBtn');
    if (sidebarProfileBtn) {
        sidebarProfileBtn.addEventListener('click', function() {
            navigateTo('profile');
            closeSidebar();
        });
    }
    
    const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');
    if (sidebarLogoutBtn) {
        sidebarLogoutBtn.addEventListener('click', function() {
            showAlert("Confirm Logout", "Are you sure you want to logout?", "warning");
            
            const alertButton = document.getElementById('alertButton');
            if (alertButton) {
                const originalText = alertButton.textContent;
                const originalOnClick = alertButton.onclick;
                
                alertButton.textContent = "LOGOUT";
                alertButton.onclick = function() {
                    // Clear all localStorage
                    ApiService.clearToken();
                    
                    // Reset AppState
                    AppState.user = null;
                    AppState.currentStreak = 0;
                    AppState.highestStreak = 0;
                    AppState.currentPage = 'hero';
                    
                    // Navigate to hero page
                    navigateTo('hero');
                    closeSidebar();
                    hideAlert();
                    
                    // Reset alert button
                    alertButton.textContent = originalText;
                    alertButton.onclick = originalOnClick;
                };
            }
        });
    }
    
    // Debug button (optional - for testing)
    const debugBtn = document.getElementById('debugBtn');
    if (debugBtn) {
        debugBtn.addEventListener('click', async function() {
            console.log('🐛 Debug button clicked');
            const result = await debugDatabaseStatus();
            if (result) {
                showAlert("Debug Info", `Total users in database: ${result.count}`, "info");
            }
        });
    }
});

// ✅ Check backend connection on load
window.addEventListener('load', function() {
    console.log('Testing backend connection...');
    
    // Try to check backend health
    ApiService.checkBackendConnection()
        .then(result => {
            if (result.connected) {
                console.log('✅ Backend is reachable');
                console.log('Backend status:', result.data);
            } else {
                console.log('❌ Backend connection issue:', result.error);
            }
        })
        .catch(error => {
            console.log('❌ Backend check failed:', error.message);
        });
});

// ✅ Handle page refresh
window.addEventListener('beforeunload', function() {
    // Save current page
    saveCurrentPage(AppState.currentPage);
});

// ✅ Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const savedPage = loadCurrentPage();
    if (savedPage !== AppState.currentPage) {
        navigateTo(savedPage);
    }
});

// ✅ Add reset password link if needed
function addResetPasswordLink() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const resetLink = document.createElement('a');
        resetLink.href = '#';
        resetLink.id = 'resetPasswordLink';
        resetLink.textContent = 'Forgot Password?';
        resetLink.style.display = 'block';
        resetLink.style.textAlign = 'center';
        resetLink.style.marginTop = '15px';
        resetLink.style.color = '#FFD700';
        resetLink.style.textDecoration = 'none';
        
        resetLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAlert("Reset Password", "Please contact support to reset your password.", "info");
        });
        
        loginForm.appendChild(resetLink);
    }
}

// Initialize reset password link
setTimeout(addResetPasswordLink, 1000);

// Export for debugging (optional)
if (typeof window !== 'undefined') {
    window.AppState = AppState;
    window.ApiService = ApiService;
    window.navigateTo = navigateTo;
    window.showAlert = showAlert;
    window.hideAlert = hideAlert;
}