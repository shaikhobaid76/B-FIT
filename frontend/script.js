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
        // ADDED: ABS Workout Videos
        "Cable Crunches": "assets/videos/cable-crunches.mp4",
        "Leg Raises": "assets/videos/leg-raises.mp4",
        "Russian Twists": "assets/videos/russian-twists.mp4",
        "Plank": "assets/videos/plank.mp4"
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
        3: "assets/images/wednesday.jpg", // Chest + ABS
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
    
    // Workout Sets Data - UPDATED WITH ABS WORKOUTS
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
        3: [ // Wednesday - Chest + ABS (UPDATED)
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
    
    // Weekly Workout Plan - UPDATED
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
        3: { // Wednesday - UPDATED WITH ABS
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
        { day: "Wednesday", workout: "Chest + ABS", current: false, dayIndex: 3 }, // UPDATED
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

// ✅ SIMPLIFIED API Service Functions
const ApiService = {
    // Set token
    setToken(token) {
        localStorage.setItem('bfitToken', token);
    },
    
    // Get token
    getToken() {
        return localStorage.getItem('bfitToken');
    },
    
    // Clear token
    clearToken() {
        localStorage.removeItem('bfitToken');
        localStorage.removeItem('bfitCurrentUser');
        localStorage.removeItem('bfitUserId');
    },
    
    // ✅ SIMPLE: Make API request
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
        
        if (data && method !== 'GET') {
            config.body = JSON.stringify(data);
        }
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error(`API Error at ${endpoint}:`, error.message);
            throw error;
        }
    },
    
    // ✅ SIMPLE: Register
    async register(userData) {
        try {
            const result = await this.request('/auth/register', 'POST', userData);
            this.setToken(result.token);
            
            // Save user locally
            localStorage.setItem('bfitCurrentUser', JSON.stringify(result.user));
            localStorage.setItem('bfitUserId', result.user._id || result.userId);
            
            return result;
        } catch (error) {
            console.log('API register failed');
            throw error;
        }
    },
    
    // ✅ SIMPLE: Login
    async login(phone, password) {
        try {
            const result = await this.request('/auth/login', 'POST', { phone, password });
            this.setToken(result.token);
            
            // Save user locally
            localStorage.setItem('bfitCurrentUser', JSON.stringify(result.user));
            localStorage.setItem('bfitUserId', result.user._id);
            
            return result;
        } catch (error) {
            console.log('API login failed');
            throw error;
        }
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
    if (AppState.currentPage === pageName) {
        return;
    }
    
    const currentPage = pages[AppState.currentPage];
    const nextPage = pages[pageName];
    
    if (!nextPage) {
        console.error('Page not found:', pageName);
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
    
    updateHamburgerVisibility();
    updateBackButtonVisibility();
    
    initializePage(pageName);
}

function updateHamburgerVisibility() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
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
        if (AppState.currentPage === 'warmup' || AppState.currentPage === 'workoutSets' || 
            AppState.currentPage === 'workout' || AppState.currentPage === 'profile') {
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
    
    const homeDayElement = document.getElementById('homeDay');
    if (homeDayElement) {
        AppState.currentDay = now.getDay();
        homeDayElement.textContent = days[now.getDay()];
    }
}

// ✅ UPDATED: Dashboard Functions with FIXED login persistence
async function updateDashboard() {
    try {
        console.log('Updating dashboard...');
        
        // Load from local storage first
        loadFromLocalStorage();
        
        // Update streak from MongoDB if possible
        await updateStreakFromMongoDB();
        
        // Load weekly plan for sidebar
        loadWeeklyPlan();
        
        // Update today's workout
        updateTodaysWorkout();
        
        // Update day
        updateDateTime();
        
        // Update workout image
        updateWorkoutImage();
        
    } catch (error) {
        console.error('Dashboard update error:', error);
        // Fallback
        loadFromLocalStorage();
        updateTodaysWorkout();
        updateDateTime();
        updateWorkoutImage();
    }
}

function loadFromLocalStorage() {
    // Load streaks from localStorage (for display only)
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

// ✅ NEW: Get streak from MongoDB
async function updateStreakFromMongoDB() {
    try {
        const userId = localStorage.getItem('bfitUserId');
        if (!userId || userId === 'local-user') return;
        
        const response = await fetch(`${API_BASE_URL}/streak/${userId}`);
        if (response.ok) {
            const result = await response.json();
            if (result.streak) {
                AppState.currentStreak = result.streak.currentStreak || 0;
                AppState.highestStreak = result.streak.highestStreak || 0;
                
                // Update display
                const currentStreakElement = document.getElementById('currentStreakCount');
                if (currentStreakElement) {
                    currentStreakElement.textContent = AppState.currentStreak;
                }
                
                console.log('✅ Streak loaded from MongoDB:', result.streak);
            }
        }
    } catch (error) {
        console.log('Could not load streak from MongoDB:', error.message);
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
    
    document.getElementById('workoutSetsTitle').textContent = workout.day.toUpperCase();
    document.getElementById('workoutDayTitle').textContent = workout.title;
    
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
    
    AppState.currentYoutubeLink = exercise.youtubeLink;
    AppState.currentVideoLink = exercise.video || AppState.workoutVideos[exercise.name];
    
    const videoContainer = document.getElementById('exerciseVideoContainer');
    const video = document.getElementById('exerciseVideo');
    const videoSource = document.getElementById('videoSource');
    
    if (AppState.currentVideoLink) {
        videoSource.src = AppState.currentVideoLink;
        video.load();
        video.play().catch(e => {
            console.log("Video autoplay prevented:", e);
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
    
    countdownContainer.style.display = 'flex';
    countdownContainer.classList.add('active');
    
    let timeLeft = 60;
    countdownDisplay.textContent = timeLeft;
    
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

// ✅ FIXED: Check if already worked out today
function hasWorkedOutToday() {
    const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
    if (!lastWorkoutDate) return false;
    
    const today = new Date().toDateString();
    const lastDate = new Date(lastWorkoutDate).toDateString();
    
    return today === lastDate;
}

// ✅ FIXED: Update Streak Function - MongoDB ONLY
async function updateStreak() {
    try {
        const now = new Date();
        const today = now.toDateString();
        
        // Sunday check
        if (now.getDay() === 0) {
            console.log('Sunday - no streak update');
            showAlert("Rest Day", "Sunday is rest day! No streak update.", "info");
            return;
        }
        
        // ✅ Check if already worked out today
        if (hasWorkedOutToday()) {
            console.log('Already worked out today - no streak update');
            showAlert("Already Completed", "You have already completed your workout today! .", "info");
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
        
        // ✅ Save to MongoDB
        const userId = localStorage.getItem('bfitUserId');
        
        if (!userId || userId === 'local-user') {
            console.log('No valid user ID, cannot save to MongoDB');
            showAlert("Error", "Cannot save streak. Please login again.", "error");
            return;
        }
        
        console.log('Saving to MongoDB...', {
            userId: userId,
            currentStreak: currentStreak,
            highestStreak: highestStreak,
            lastWorkoutDate: today
        });
        
        const response = await fetch(`${API_BASE_URL}/streak/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                currentStreak: currentStreak,
                highestStreak: highestStreak,
                lastWorkoutDate: today
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            console.log('✅ MongoDB Response:', result);
            
            // Only save to localStorage for display if MongoDB save successful
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
            
            showAlert("Great Job!", `Your streak is now ${currentStreak} days!`, "success");
            return result.streak;
            
        } else {
            const errorText = await response.text();
            console.error('❌ MongoDB Save Failed:', errorText);
            showAlert("Database Error", "Could not save your streak to database. Please try again.", "error");
            return null;
        }
        
    } catch (error) {
        console.error('Streak update failed:', error);
        showAlert("Network Error", "Could not connect to database. Please check your internet connection.", "error");
        return null;
    }
}

function updateCompletionPage() {
    document.getElementById('updatedStreak').textContent = AppState.currentStreak;
}

// Profile Functions
async function loadProfilePage() {
    try {
        // Load from local storage
        const savedUser = localStorage.getItem('bfitCurrentUser');
        
        if (savedUser) {
            AppState.user = JSON.parse(savedUser);
            
            document.getElementById('profileUserName').textContent = AppState.user.name || 'User';
            document.getElementById('profileUserPhone').textContent = AppState.user.phone || 'N/A';
            document.getElementById('profileName').value = AppState.user.name || '';
            document.getElementById('profilePhone').value = AppState.user.phone || '';
            document.getElementById('profileAge').value = AppState.user.age || '';
            document.getElementById('profileGender').value = AppState.user.gender || '';
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
        
        if (!profileData.name) {
            showAlert("Validation Error", "Name is required", "error");
            return;
        }
        
        // Save to local storage
        const currentUser = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
        const updatedUser = { ...currentUser, ...profileData };
        localStorage.setItem('bfitCurrentUser', JSON.stringify(updatedUser));
        
        // Update AppState
        AppState.user = updatedUser;
        
        // Update sidebar
        const sidebarName = document.getElementById('sidebarUserName');
        const sidebarPhone = document.getElementById('sidebarUserPhone');
        if (sidebarName) sidebarName.textContent = updatedUser.name;
        if (sidebarPhone) sidebarPhone.textContent = updatedUser.phone || 'N/A';
        
        showAlert("Profile Saved", "Your profile has been saved successfully!", "success");
        
    } catch (error) {
        console.error('Save profile error:', error);
        showAlert("Save Failed", "Could not save profile. Please try again.", "error");
    }
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

// ✅ FIXED: Event Listeners
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
            navigateTo('loading');
            setTimeout(() => {
                navigateTo('dashboard');
            }, 1500);
        } else {
            navigateTo('login');
        }
    });
    
    // Register Form
    document.getElementById('registerForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value.trim();
        const phone = document.getElementById('registerPhone').value.trim();
        const gender = document.getElementById('registerGender').value;
        const age = document.getElementById('registerAge').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        // Validation
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
        
        // Show loading
        showAlert("Registering", "Creating your account...", "info");
        
        try {
            const userData = { 
                name, 
                phone, 
                password, 
                gender, 
                age: age || null 
            };
            
            // Try API registration
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
            showAlert("Registration Failed", "Could not create account. Please try again.", "error");
        }
    });
    
    // Login Form
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const phone = document.getElementById('loginPhone').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        if (!phone || !password) {
            showAlert("Validation Error", "Please enter phone and password", "warning");
            return;
        }
        
        // Show loading
        showAlert("Logging In", "Please wait...", "info");
        
        try {
            // Try API login
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
            console.error('Login error:', error);
            hideAlert();
            showAlert("Login Failed", "Invalid phone number or password", "error");
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
        AppState.selectedDayForWorkout = null;
        
        if (AppState.currentWorkoutDay === 0) {
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
        
        const alertButton = document.getElementById('alertButton');
        alertButton.textContent = "LOGOUT";
        alertButton.onclick = function() {
            // Clear all localStorage
            localStorage.clear();
            
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
            alertButton.textContent = "OK";
            alertButton.onclick = hideAlert;
        };
    });
    
    // ✅ FIXED: Check if user is already logged in
    setTimeout(() => {
        const currentUser = localStorage.getItem('bfitCurrentUser');
        const userId = localStorage.getItem('bfitUserId');
        
        console.log('Login check on load:', {
            currentUser: !!currentUser,
            userId: userId,
            currentPage: AppState.currentPage
        });
        
        // If user exists, go to dashboard
        if (currentUser && userId) {
            console.log('✅ User already logged in, going to dashboard');
            
            // If currently on hero page, go to dashboard
            if (AppState.currentPage === 'hero') {
                navigateTo('dashboard');
            }
            // Otherwise stay on current page (don't navigate)
        }
        // Don't do anything if not logged in - stay on current page
    }, 500);
});

// ✅ Check backend connection
window.addEventListener('load', function() {
    console.log('Testing backend connection...');
    
    // Try to check backend health
    fetch(`${API_BASE_URL}/health`)
        .then(response => {
            if (response.ok) {
                console.log('✅ Backend is reachable');
                return response.json();
            } else {
                throw new Error('Backend not responding');
            }
        })
        .then(data => {
            console.log('Backend status:', data);
        })
        .catch(error => {
            console.log('❌ Backend is offline:', error.message);
        });
});