// App State Management
const AppState = {
    currentPage: 'hero',
    user: null,
    currentStreak: 0,
    highestStreak: 0,
    currentDay: new Date().getDay(), // 0 = Sunday, 6 = Saturday
    currentWorkoutDay: null,
    countdownInterval: null,
    lastWorkoutDate: null,
    
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
        "Bench Dips (Finisher)": "assets/videos/bench-dips.mp4",
        "Leg Press Machine": "assets/videos/leg-press.mp4",
        "Leg Extension Machine": "assets/videos/leg-extension.mp4",
        "Seated Leg Curl Machine": "assets/videos/leg-curl.mp4",
        "Standing Calf Raise Machine": "assets/videos/calf-raise.mp4",
        "Barbell Squat": "assets/videos/squat.mp4",
        "Dumbbell Walking Lunges": "assets/videos/lunges.mp4",
        "Romanian Deadlift (RDL)": "assets/videos/rdl.mp4",
        "Bodyweight Squat (Finisher)": "assets/videos/bodyweight-squat.mp4"
    },
    
    // Warmup Videos
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
    
    // Workout Images
    workoutImages: {
        1: "assets/images/monday.jpg", // Back + Biceps
        2: "assets/images/tuesday.jpg", // Shoulder + Triceps
        3: "assets/images/wednesday.jpg", // Chest
        4: "assets/images/thursday.jpg", // Shoulder (Light)
        5: "assets/images/friday.jpg", // Arms Blast
        6: "assets/images/saturday.jpg", // Legs
        0: "assets/images/sunday.jpg"
    },
    
    // Updated Warmup Exercises
    warmupExercises: [
        {
            name: "Jumping Jacks",
            duration: "1 min",
            description: "Full body cardio warmup to increase heart rate and blood flow.",
            youtubeLink: "https://www.youtube.com/results?search_query=jumping+jacks+warm+up",
            video: "assets/videos/jumping-jacks.mp4"
        },
        {
            name: "High Knees",
            duration: "30-45 sec",
            description: "Dynamic leg exercise to activate leg muscles and improve coordination.",
            youtubeLink: "https://www.youtube.com/results?search_query=high+knees+warm+up",
            video: "assets/videos/high-knees.mp4"
        },
        {
            name: "Arm Swings (Forward + Backward)",
            duration: "20-20 reps",
            description: "Loosen up shoulder joints and improve upper body mobility.",
            youtubeLink: "https://www.youtube.com/results?search_query=arm+swings+warm+up",
            video: "assets/videos/arm-swings.mp4"
        },
        {
            name: "Neck Rotations",
            duration: "10 each side",
            description: "Gentle neck mobility exercise to prevent neck strain during workouts.",
            youtubeLink: "https://www.youtube.com/results?search_query=neck+rotation+exercise",
            video: "assets/videos/neck-rotations.mp4"
        },
        {
            name: "Shoulder Rotations",
            duration: "15-15 reps",
            description: "Warm up shoulder joints and rotator cuff muscles.",
            youtubeLink: "https://www.youtube.com/results?search_query=shoulder+rotation+warm+up",
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
            youtubeLink: "https://www.youtube.com/results?search_query=bodyweight+squat+warm+up",
            video: "assets/videos/bodyweight-squats.mp4"
        },
        {
            name: "Hip Circles",
            duration: "10 each side",
            description: "Loosen up hip joints and improve hip mobility.",
            youtubeLink: "https://www.youtube.com/results?search_query=hip+circle+exercise",
            video: "assets/videos/hip-circles.mp4"
        }
    ],
    
    // Workout Sets Data
    workoutSets: {
        1: [ // Monday - Back + Biceps (11 sets)
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
        2: [ // Tuesday - Shoulder + Triceps (11 sets)
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
        3: [ // Wednesday - Chest (7 sets)
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
                    { name: "Dumbbell Chest Fly", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+chest+fly+proper+form", video: "assets/videos/dumbbell-fly.mp4" },
                    { name: "Push-ups", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=push+up+proper+form", video: "assets/videos/pushups.mp4" }
                ]
            }
        ],
        4: [ // Thursday - Shoulder (Light) (7 sets)
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
        5: [ // Friday - Biceps + Triceps (10 sets)
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
        6: [ // Saturday - Legs (8 sets)
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
        0: [] // Sunday - Rest Day
    },
    
    // Weekly Workout Plan
    weeklyWorkouts: {
        1: { // Monday
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
        2: { // Tuesday
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
        3: { // Wednesday
            day: "Wednesday",
            title: "CHEST",
            exercises: [
                { name: "Chest Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=chest+press+machine+proper+form", video: "assets/videos/chest-press.mp4" },
                { name: "Incline Chest Press Machine", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+chest+press+machine+proper+form", video: "assets/videos/incline-press.mp4" },
                { name: "Pec Deck / Chest Fly Machine", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=pec+deck+machine+proper+form", video: "assets/videos/pec-deck.mp4" },
                { name: "Flat Barbell Bench Press", sets: 4, reps: "8-10", youtubeLink: "https://www.youtube.com/results?search_query=flat+barbell+bench+press+proper+form", video: "assets/videos/bench-press.mp4" },
                { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", youtubeLink: "https://www.youtube.com/results?search_query=incline+dumbbell+bench+press+proper+form", video: "assets/videos/incline-dumbbell-press.mp4" },
                { name: "Dumbbell Chest Fly", sets: 3, reps: "12-15", youtubeLink: "https://www.youtube.com/results?search_query=dumbbell+chest+fly+proper+form", video: "assets/videos/dumbbell-fly.mp4" },
                { name: "Push-ups", sets: 2, reps: "15-20", youtubeLink: "https://www.youtube.com/results?search_query=push+up+proper+form", video: "assets/videos/pushups.mp4" }
            ]
        },
        4: { // Thursday
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
        5: { // Friday
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
        6: { // Saturday
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
        0: { // Sunday
            day: "Sunday",
            title: "REST DAY",
            exercises: []
        }
    },
    
    weeklyPlan: [
        { day: "Monday", workout: "Back + Biceps", current: false, dayIndex: 1 },
        { day: "Tuesday", workout: "Shoulder + Triceps", current: false, dayIndex: 2 },
        { day: "Wednesday", workout: "Chest", current: false, dayIndex: 3 },
        { day: "Thursday", workout: "Shoulder (Light)", current: false, dayIndex: 4 },
        { day: "Friday", workout: "Arms Blast", current: false, dayIndex: 5 },
        { day: "Saturday", workout: "Legs", current: false, dayIndex: 6 },
        { day: "Sunday", workout: "Rest", current: false, dayIndex: 0 }
    ],
    
    currentExerciseIndex: 0,
    currentYoutubeLink: "",
    currentVideoLink: "",
    selectedDayForWorkout: null // New variable to track selected day
};

// API Configuration
const API_BASE_URL = 'https://b-fit-backend-jy2e.onrender.com/api'; // Change in production  

// API Service Functions
const ApiService = {
    // Set token in localStorage and headers
    setToken(token) {
        localStorage.setItem('bfitToken', token);
    },
    
    // Get token from localStorage
    getToken() {
        return localStorage.getItem('bfitToken');
    },
    
    // Clear token
    clearToken() {
        localStorage.removeItem('bfitToken');
    },
    
    // Make API request
    async request(endpoint, method = 'GET', data = null) {
        const url = `${API_BASE_URL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
        };
        
        const token = this.getToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        
        const config = {
            method,
            headers,
        };
        
        if (data) {
            config.body = JSON.stringify(data);
        }
        
        try {
            const response = await fetch(url, config);
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.message || 'API request failed');
            }
            
            return result;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    // Auth endpoints
    async register(userData) {
        return await this.request('/auth/register', 'POST', userData);
    },
    
    async login(phone, password) {
        return await this.request('/auth/login', 'POST', { phone, password });
    },
    
    async getProfile() {
        return await this.request('/auth/profile', 'GET');
    },
    
    async updateProfile(profileData) {
        return await this.request('/auth/profile', 'PUT', profileData);
    },
    
    // Workout endpoints
    async getTodaysWorkout() {
        return await this.request('/workout/today', 'GET');
    },
    
    async getWorkoutByDay(dayIndex) {
        return await this.request(`/workout/day/${dayIndex}`, 'GET');
    },
    
    async completeWorkout(workoutId, duration) {
        return await this.request('/workout/complete', 'POST', { 
            workoutId, 
            duration 
        });
    },
    
    // Streak endpoints
    async getStreak() {
        return await this.request('/streak', 'GET');
    },
    
    async updateStreak() {
        return await this.request('/streak/update', 'POST');
    },
    
    async getStreakHistory() {
        return await this.request('/streak/history', 'GET');
    }
};

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

// Fix for 60 showing on screen - Hide countdown timer by default
function initializeCountdownTimer() {
    const countdownContainer = document.getElementById('countdownTimerContainer');
    if (countdownContainer) {
        countdownContainer.style.display = 'none';
        countdownContainer.classList.remove('active');
    }
}

// Alert Modal Functions
function showAlert(title, message, icon = "info") {
    document.getElementById('alertTitle').textContent = title;
    document.getElementById('alertMessage').textContent = message;
    
    const iconElement = document.getElementById('alertIcon');
    switch(icon) {
        case "success":
            iconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
            break;
        case "error":
            iconElement.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case "warning":
            iconElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        default:
            iconElement.innerHTML = '<i class="fas fa-info-circle"></i>';
    }
    
    document.getElementById('alertModal').classList.add('active');
}

function hideAlert() {
    document.getElementById('alertModal').classList.remove('active');
}

// Navigation Functions
function navigateTo(pageName) {
    // Don't navigate if already on this page
    if (AppState.currentPage === pageName) {
        return;
    }
    
    const currentPage = pages[AppState.currentPage];
    const nextPage = pages[pageName];
    
    if (!nextPage) {
        console.error('Page not found:', pageName);
        return;
    }
    
    // Update classes for smooth transition
    if (currentPage) {
        currentPage.classList.remove('active');
        currentPage.classList.add('previous');
    }
    
    nextPage.classList.remove('next', 'previous');
    nextPage.classList.add('active');
    
    // Reset other pages
    Object.keys(pages).forEach(key => {
        if (key !== pageName && key !== AppState.currentPage) {
            const page = pages[key];
            page.classList.remove('active', 'previous');
            page.classList.add('next');
        }
    });
    
    // Update state
    AppState.currentPage = pageName;
    
    // Update hamburger button visibility
    updateHamburgerVisibility();
    
    // Update back button visibility
    updateBackButtonVisibility();
    
    // Page-specific initialization
    initializePage(pageName);
}

function updateHamburgerVisibility() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    // Show hamburger only on dashboard, profile, and workout sets pages
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
    // Show back button only on warmup, workout sets, and workout pages
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(btn => {
        if (AppState.currentPage === 'warmup' || AppState.currentPage === 'workoutSets' || AppState.currentPage === 'workout' || AppState.currentPage === 'profile') {
            btn.style.visibility = 'visible';
        } else {
            btn.style.visibility = 'hidden';
        }
    });
}

function initializePage(pageName) {
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
    }
}

// Time Functions
function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Update day display on dashboard
    const homeDayElement = document.getElementById('homeDay');
    if (homeDayElement) {
        AppState.currentDay = now.getDay();
        homeDayElement.textContent = days[now.getDay()];
    }
}

// Dashboard Functions
async function updateDashboard() {
    try {
        // Load user profile if logged in
        if (ApiService.getToken()) {
            try {
                const profileResult = await ApiService.getProfile();
                AppState.user = profileResult.user;
                
                // Load streak from API
                const streakResult = await ApiService.getStreak();
                AppState.currentStreak = streakResult.streak.currentStreak;
                AppState.highestStreak = streakResult.streak.highestStreak;
                
                // Update streak display
                const currentStreakElement = document.getElementById('currentStreakCount');
                if (currentStreakElement) {
                    currentStreakElement.textContent = AppState.currentStreak;
                }
                
                // Update sidebar user info
                document.getElementById('sidebarUserName').textContent = AppState.user.name;
                document.getElementById('sidebarUserPhone').textContent = AppState.user.phone;
            } catch (apiError) {
                console.log('Using local storage for offline mode');
                // Fallback to localStorage if API fails
                loadFromLocalStorage();
            }
        } else {
            // Use localStorage if no API token
            loadFromLocalStorage();
        }
        
        // Load weekly plan for sidebar
        loadWeeklyPlan();
        
        // Update today's workout based on day
        updateTodaysWorkout();
        
        // Update day
        updateDateTime();
        
        // Update workout image (only for current day)
        updateWorkoutImage();
        
    } catch (error) {
        console.error('Dashboard update error:', error);
        // Fallback to localStorage on error
        loadFromLocalStorage();
        updateTodaysWorkout();
        updateDateTime();
        updateWorkoutImage();
    }
}

function loadFromLocalStorage() {
    // Load streaks from localStorage
    const savedCurrentStreak = localStorage.getItem('bfitCurrentStreak');
    const savedHighestStreak = localStorage.getItem('bfitHighestStreak');
    AppState.lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
    
    AppState.currentStreak = savedCurrentStreak ? parseInt(savedCurrentStreak) : 0;
    AppState.highestStreak = savedHighestStreak ? parseInt(savedHighestStreak) : 0;
    
    // Update streak display
    const currentStreakElement = document.getElementById('currentStreakCount');
    if (currentStreakElement) {
        currentStreakElement.textContent = AppState.currentStreak;
    }
    
    // Load current user if exists
    const savedUser = localStorage.getItem('bfitCurrentUser');
    if (savedUser) {
        AppState.user = JSON.parse(savedUser);
        document.getElementById('sidebarUserName').textContent = AppState.user.name;
        document.getElementById('sidebarUserPhone').textContent = AppState.user.phone;
    }
}

function updateTodaysWorkout() {
    const workoutTitle = document.getElementById('todayWorkout');
    const todayWorkout = AppState.weeklyWorkouts[AppState.currentDay];
    
    if (todayWorkout && todayWorkout.title) {
        workoutTitle.textContent = todayWorkout.title;
        AppState.currentWorkoutDay = AppState.currentDay;
    } else {
        workoutTitle.textContent = "REST DAY";
        AppState.currentWorkoutDay = 0;
    }
}

function updateWorkoutImage() {
    const imageContainer = document.getElementById('workoutImageContainer');
    const imageText = document.getElementById('workoutImageText');
    const workout = AppState.weeklyWorkouts[AppState.currentWorkoutDay];
    
    if (workout && workout.title) {
        imageText.textContent = workout.title;
        // Set background image
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
    
    // Update current day in weekly plan
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
        
        // Add click event to navigate to workout sets for that day
        dayItem.addEventListener('click', function() {
            const dayIndex = parseInt(this.dataset.dayIndex);
            startWorkoutForDay(dayIndex);
            closeSidebar();
        });
        
        weeklyPlanContainer.appendChild(dayItem);
    });
}

function startWorkoutForDay(dayIndex) {
    if (dayIndex === 0) { // Sunday - Rest day
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
    
    // Navigate to workout sets page
    navigateTo('workoutSets');
}

// Workout Sets Page Functions
function loadWorkoutSetsPage() {
    // Use selected day or current day
    const dayToLoad = AppState.selectedDayForWorkout !== null ? AppState.selectedDayForWorkout : AppState.currentWorkoutDay;
    const workout = AppState.weeklyWorkouts[dayToLoad];
    const sets = AppState.workoutSets[dayToLoad];
    
    if (!workout || !sets || sets.length === 0) {
        showAlert("No Workout Sets", "No workout sets found for this day!", "warning");
        navigateTo('dashboard');
        return;
    }
    
    // Update page title
    document.getElementById('workoutSetsTitle').textContent = workout.day.toUpperCase();
    document.getElementById('workoutDayTitle').textContent = workout.title;
    
    // Load sets
    const setsGrid = document.getElementById('workoutSetsGrid');
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
    
    document.getElementById('currentExerciseName').textContent = exercise.name.toUpperCase();
    document.getElementById('currentExerciseDetails').textContent = `${exercise.sets} × ${exercise.reps}`;
    document.getElementById('currentExerciseIndex').textContent = AppState.currentExerciseIndex + 1;
    document.getElementById('totalExercises').textContent = workout.exercises.length;
    document.getElementById('workoutPageTitle').textContent = workout.day.toUpperCase();
    
    // Store YouTube link
    AppState.currentYoutubeLink = exercise.youtubeLink;
    AppState.currentVideoLink = exercise.video || AppState.workoutVideos[exercise.name];
    
    // Load video
    const videoContainer = document.getElementById('exerciseVideoContainer');
    const video = document.getElementById('exerciseVideo');
    const videoSource = document.getElementById('videoSource');
    
    if (AppState.currentVideoLink) {
        videoSource.src = AppState.currentVideoLink;
        video.load();
        video.play().catch(e => {
            console.log("Video autoplay prevented:", e);
            // Show play button overlay
            videoContainer.innerHTML = `
                <div class="video-placeholder" id="videoPlaceholder">
                    <i class="fas fa-play-circle"></i>
                    <p>Click to play exercise video</p>
                </div>
                <video id="exerciseVideo" style="display: none;">
                    <source id="videoSource" src="${AppState.currentVideoLink}" type="video/mp4">
                </video>
            `;
            
            document.getElementById('videoPlaceholder').addEventListener('click', function() {
                this.style.display = 'none';
                video.style.display = 'block';
                video.play();
            });
        });
    } else {
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <i class="fas fa-play-circle"></i>
                <p>Video not available for this exercise</p>
            </div>
        `;
    }
}

function startCountdown() {
    const countdownContainer = document.getElementById('countdownTimerContainer');
    const countdownDisplay = document.getElementById('countdownTimerDisplay');
    
    // Show countdown overlay
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
            countdownContainer.classList.remove('active');
            countdownContainer.style.display = 'none';
            
            // Move to next exercise
            const dayToLoad = AppState.selectedDayForWorkout !== null ? AppState.selectedDayForWorkout : AppState.currentWorkoutDay;
            const workout = AppState.weeklyWorkouts[dayToLoad];
            AppState.currentExerciseIndex++;
            
            if (AppState.currentExerciseIndex < workout.exercises.length) {
                loadWorkoutExercise();
            } else {
                // Workout completed
                AppState.currentExerciseIndex = 0;
                
                // Update streak
                updateStreak();
                
                navigateTo('completion');
            }
        }
    }, 1000);
}

async function updateStreak() {
    try {
        if (ApiService.getToken()) {
            // Update streak via API
            const result = await ApiService.updateStreak();
            AppState.currentStreak = result.streak.currentStreak;
            AppState.highestStreak = result.streak.highestStreak;
        } else {
            // Update streak locally
            const now = new Date();
            const today = now.toDateString();
            
            // Don't update streak on Sunday (day 0)
            if (now.getDay() === 0) {
                return;
            }
            
            const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
            
            if (!lastWorkoutDate) {
                // First workout
                AppState.currentStreak = 1;
            } else {
                const lastDate = new Date(lastWorkoutDate);
                const diffTime = Math.abs(now - lastDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays === 1) {
                    // Worked out yesterday
                    AppState.currentStreak++;
                } else if (diffDays > 1) {
                    // Missed a day, reset streak
                    AppState.currentStreak = 1;
                }
                // If diffDays is 0, already worked out today, don't update
            }
            
            // Update highest streak if current is higher
            if (AppState.currentStreak > AppState.highestStreak) {
                AppState.highestStreak = AppState.currentStreak;
            }
            
            // Save to localStorage
            localStorage.setItem('bfitCurrentStreak', AppState.currentStreak);
            localStorage.setItem('bfitHighestStreak', AppState.highestStreak);
            localStorage.setItem('bfitLastWorkoutDate', today);
        }
        
        // Update dashboard display
        const currentStreakElement = document.getElementById('currentStreakCount');
        if (currentStreakElement) {
            currentStreakElement.textContent = AppState.currentStreak;
        }
    } catch (error) {
        console.error('Streak update error:', error);
        // Fallback to local update
        updateStreakLocally();
    }
}

function updateStreakLocally() {
    const now = new Date();
    const today = now.toDateString();
    
    // Don't update streak on Sunday (day 0)
    if (now.getDay() === 0) {
        return;
    }
    
    const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
    
    if (!lastWorkoutDate) {
        // First workout
        AppState.currentStreak = 1;
    } else {
        const lastDate = new Date(lastWorkoutDate);
        const diffTime = Math.abs(now - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Worked out yesterday
            AppState.currentStreak++;
        } else if (diffDays > 1) {
            // Missed a day, reset streak
            AppState.currentStreak = 1;
        }
    }
    
    // Update highest streak if current is higher
    if (AppState.currentStreak > AppState.highestStreak) {
        AppState.highestStreak = AppState.currentStreak;
    }
    
    // Save to localStorage
    localStorage.setItem('bfitCurrentStreak', AppState.currentStreak);
    localStorage.setItem('bfitHighestStreak', AppState.highestStreak);
    localStorage.setItem('bfitLastWorkoutDate', today);
    
    // Update dashboard display
    const currentStreakElement = document.getElementById('currentStreakCount');
    if (currentStreakElement) {
        currentStreakElement.textContent = AppState.currentStreak;
    }
}

function updateCompletionPage() {
    document.getElementById('updatedStreak').textContent = AppState.currentStreak;
}

// Profile Functions
async function loadProfilePage() {
    try {
        // Load user data from API if available
        if (ApiService.getToken()) {
            try {
                const profileResult = await ApiService.getProfile();
                AppState.user = profileResult.user;
                
                document.getElementById('profileUserName').textContent = AppState.user.name;
                document.getElementById('profileUserPhone').textContent = AppState.user.phone;
                document.getElementById('profileName').value = AppState.user.name;
                document.getElementById('profilePhone').value = AppState.user.phone;
                document.getElementById('profileAge').value = AppState.user.age || '';
                document.getElementById('profileGender').value = AppState.user.gender || '';
                
                // Load streak from API
                const streakResult = await ApiService.getStreak();
                document.getElementById('profileCurrentStreak').textContent = streakResult.streak.currentStreak;
                document.getElementById('profileHighestStreak').textContent = streakResult.streak.highestStreak;
                
                return;
            } catch (apiError) {
                console.log('Falling back to localStorage for profile');
            }
        }
        
        // Fallback to localStorage
        if (AppState.user) {
            document.getElementById('profileUserName').textContent = AppState.user.name;
            document.getElementById('profileUserPhone').textContent = AppState.user.phone;
            document.getElementById('profileName').value = AppState.user.name;
            document.getElementById('profilePhone').value = AppState.user.phone;
            
            // Load additional profile data
            const profileData = JSON.parse(localStorage.getItem('bfitProfileData')) || {};
            document.getElementById('profileAge').value = profileData.age || '';
            document.getElementById('profileGender').value = profileData.gender || '';
        }
        
        // Update streak stats
        document.getElementById('profileCurrentStreak').textContent = AppState.currentStreak;
        document.getElementById('profileHighestStreak').textContent = AppState.highestStreak;
        
    } catch (error) {
        console.error('Profile load error:', error);
    }
}

async function saveProfileData() {
    try {
        const profileData = {
            name: document.getElementById('profileName').value.trim(),
            age: document.getElementById('profileAge').value.trim(),
            gender: document.getElementById('profileGender').value
        };
        
        if (ApiService.getToken()) {
            // Save via API
            const result = await ApiService.updateProfile(profileData);
            showAlert("Profile Saved", "Your profile has been saved successfully!", "success");
            
            // Update AppState
            AppState.user = result.user;
        } else {
            // Save locally
            localStorage.setItem('bfitProfileData', JSON.stringify(profileData));
            
            // Update AppState user data
            if (AppState.user) {
                AppState.user.name = profileData.name;
                AppState.user.age = profileData.age;
                AppState.user.gender = profileData.gender;
                
                // Save updated user to localStorage
                localStorage.setItem('bfitCurrentUser', JSON.stringify(AppState.user));
            }
            
            showAlert("Profile Saved", "Your profile has been saved successfully!", "success");
        }
    } catch (error) {
        showAlert("Save Failed", error.message, "error");
    }
}

// User Management
function saveUser(user) {
    let users = JSON.parse(localStorage.getItem('bfitUsers')) || [];
    
    // Check if user already exists
    const existingUserIndex = users.findIndex(u => u.phone === user.phone);
    if (existingUserIndex !== -1) {
        users[existingUserIndex] = user;
    } else {
        users.push(user);
    }
    
    localStorage.setItem('bfitUsers', JSON.stringify(users));
    localStorage.setItem('bfitCurrentUser', JSON.stringify(user));
    
    AppState.user = user;
    
    // Update sidebar
    document.getElementById('sidebarUserName').textContent = user.name;
    document.getElementById('sidebarUserPhone').textContent = user.phone;
}

function loginUser(phone, password) {
    const users = JSON.parse(localStorage.getItem('bfitUsers')) || [];
    const user = users.find(u => u.phone === phone && u.password === password);
    
    if (user) {
        localStorage.setItem('bfitCurrentUser', JSON.stringify(user));
        AppState.user = user;
        
        // Update sidebar
        document.getElementById('sidebarUserName').textContent = user.name;
        document.getElementById('sidebarUserPhone').textContent = user.phone;
        
        return true;
    }
    return false;
}

// Sidebar Functions
function openSidebar() {
    document.getElementById('sidebar').classList.add('sidebar-open');
    document.getElementById('sidebarOverlay').style.display = 'block';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('sidebar-open');
    document.getElementById('sidebarOverlay').style.display = 'none';
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

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer - hide by default
    initializeCountdownTimer();
    
    // Initialize password toggles
    initializePasswordToggles();
    
    // Update day initially
    updateDateTime();
    
    // Load saved streaks
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
    
    // Load current user if exists
    const savedUser = localStorage.getItem('bfitCurrentUser');
    if (savedUser) {
        AppState.user = JSON.parse(savedUser);
        document.getElementById('sidebarUserName').textContent = AppState.user.name;
        document.getElementById('sidebarUserPhone').textContent = AppState.user.phone;
    }
    
    // Initially hide hamburger button
    document.getElementById('hamburgerBtn').style.display = 'none';
    
    // Alert Modal
    document.getElementById('alertButton').addEventListener('click', hideAlert);
    document.getElementById('alertModal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideAlert();
        }
    });
    
    // Hero Page - Direct to Login Page
    document.getElementById('getStartedBtn').addEventListener('click', function() {
        const currentUser = localStorage.getItem('bfitCurrentUser');
        if (currentUser) {
            // User is logged in, go to loading then dashboard
            navigateTo('loading');
            setTimeout(() => {
                navigateTo('dashboard');
            }, 2000);
        } else {
            // No user, go to login page
            navigateTo('login');
        }
    });
    
    // Register Page - Updated with API integration
    document.getElementById('registerForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value.trim();
        const phone = document.getElementById('registerPhone').value.trim();
        const gender = document.getElementById('registerGender').value;
        const age = document.getElementById('registerAge').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        // Simple validation
        if (name.length < 2) {
            showAlert("Validation Error", "Name must be at least 2 characters long", "warning");
            return;
        }
        
        if (!/^\d{10}$/.test(phone)) {
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
        
        try {
            // Try to register via API first
            const userData = { name, phone, password, gender, age: age || null };
            const result = await ApiService.register(userData);
            
            // Save token and user data
            ApiService.setToken(result.token);
            AppState.user = result.user;
            
            // Update sidebar
            document.getElementById('sidebarUserName').textContent = result.user.name;
            document.getElementById('sidebarUserPhone').textContent = result.user.phone;
            
            // Show loading and then go to dashboard
            navigateTo('loading');
            setTimeout(() => {
                navigateTo('dashboard');
            }, 2000);
            
        } catch (apiError) {
            console.log('API registration failed, using local storage');
            
            // Fallback to local storage registration
            const user = {
                name,
                phone,
                gender,
                age,
                password,
                registeredAt: new Date().toISOString()
            };
            
            saveUser(user);
            
            // Save profile data
            const profileData = { gender, age };
            localStorage.setItem('bfitProfileData', JSON.stringify(profileData));
            
            // Show loading and then go to dashboard
            navigateTo('loading');
            setTimeout(() => {
                navigateTo('dashboard');
            }, 2000);
        }
    });
    
    // Login Page - Updated with API integration
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const phone = document.getElementById('loginPhone').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        try {
            // Try to login via API first
            const result = await ApiService.login(phone, password);
            
            // Save token and user data
            ApiService.setToken(result.token);
            AppState.user = result.user;
            
            // Update sidebar
            document.getElementById('sidebarUserName').textContent = result.user.name;
            document.getElementById('sidebarUserPhone').textContent = result.user.phone;
            
            // Navigate to loading then dashboard
            navigateTo('loading');
            setTimeout(() => {
                navigateTo('dashboard');
            }, 2000);
            
        } catch (apiError) {
            console.log('API login failed, trying local storage');
            
            // Fallback to local storage login
            if (loginUser(phone, password)) {
                // Show loading and then go to dashboard
                navigateTo('loading');
                setTimeout(() => {
                    navigateTo('dashboard');
                }, 2000);
            } else {
                showAlert("Login Failed", "Invalid phone number or password", "error");
            }
        }
    });
    
    // Auth navigation links
    document.getElementById('goToLoginLink').addEventListener('click', function() {
        navigateTo('login');
    });
    
    document.getElementById('goToRegisterLink').addEventListener('click', function() {
        navigateTo('register');
    });
    
    // Dashboard
    document.getElementById('startWorkoutBtn').addEventListener('click', function() {
        // Reset selected day to current day
        AppState.selectedDayForWorkout = null;
        
        if (AppState.currentWorkoutDay === 0) { // Rest day
            showAlert("Rest Day", "Today is rest day! No workout scheduled. Take this day to recover and rejuvenate.", "info");
            return;
        }
        navigateTo('warmup');
    });
    
    // Warmup Page
    document.getElementById('backToDashboardBtn').addEventListener('click', function() {
        navigateTo('dashboard');
    });
    
    document.getElementById('startMainWorkoutBtn').addEventListener('click', function() {
        AppState.currentExerciseIndex = 0;
        navigateTo('workout');
    });
    
    // Workout Sets Page
    document.getElementById('backToDashboardFromSetsBtn').addEventListener('click', function() {
        navigateTo('dashboard');
    });
    
    document.getElementById('startWorkoutFromSetsBtn').addEventListener('click', function() {
        navigateTo('warmup');
    });
    
    // Workout Page
    document.getElementById('backToSetsBtn').addEventListener('click', function() {
        navigateTo('workoutSets');
    });
    
    document.getElementById('doneExerciseBtn').addEventListener('click', startCountdown);
    
    // YouTube Link Button
    document.getElementById('youtubeLinkBtn').addEventListener('click', function() {
        if (AppState.currentYoutubeLink) {
            window.open(AppState.currentYoutubeLink, '_blank');
        } else {
            showAlert("No Tutorial", "No tutorial link available for this exercise.", "info");
        }
    });
    
    // Completion Page
    document.getElementById('goToDashboardFromCompletionBtn').addEventListener('click', function() {
        // Reset selected day
        AppState.selectedDayForWorkout = null;
        navigateTo('dashboard');
    });
    
    // Profile Page
    document.getElementById('backToDashboardFromProfileBtn').addEventListener('click', function() {
        navigateTo('dashboard');
    });
    
    document.getElementById('saveProfileBtn').addEventListener('click', function(e) {
        e.preventDefault();
        saveProfileData();
    });
    
    // Sidebar Controls
    document.getElementById('hamburgerBtn').addEventListener('click', openSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
    
    // Sidebar Menu Items
    document.getElementById('sidebarHomeBtn').addEventListener('click', function() {
        navigateTo('dashboard');
        closeSidebar();
    });
    
    document.getElementById('sidebarProfileBtn').addEventListener('click', function() {
        navigateTo('profile');
        closeSidebar();
    });
    
    document.getElementById('sidebarLogoutBtn').addEventListener('click', function() {
        showAlert("Confirm Logout", "Are you sure you want to logout?", "warning");
        
        // Change alert button to confirm logout
        const alertButton = document.getElementById('alertButton');
        alertButton.textContent = "LOGOUT";
        alertButton.onclick = function() {
            // Clear API token
            ApiService.clearToken();
            
            // Clear local storage
            localStorage.removeItem('bfitCurrentUser');
            localStorage.removeItem('bfitToken');
            
            // Reset AppState
            AppState.user = null;
            
            // Navigate to hero page
            navigateTo('hero');
            closeSidebar();
            hideAlert();
            
            // Reset alert button
            alertButton.textContent = "OK";
            alertButton.onclick = hideAlert;
        };
    });
});