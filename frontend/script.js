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

// ✅ UPDATED API Configuration with Enhanced MongoDB Support
const API_BASE_URL = 'https://b-fit-backend-jy2e.onrender.com/api';

// ✅ ENHANCED API Service Functions
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
        localStorage.removeItem('bfitCurrentUser');
        localStorage.removeItem('bfitOfflineMode');
        localStorage.removeItem('bfitUserId');
    },
    
    // ✅ ENHANCED: Make API request with MongoDB support
    async request(endpoint, method = 'GET', data = null) {
        const url = `${API_BASE_URL}${endpoint}`;
        console.log(`🌐 API Request: ${method} ${url}`);
        
        const headers = {
            'Content-Type': 'application/json',
        };
        
        const token = this.getToken();
        if (token && token !== 'offline-token') {
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
            
            // If response is not OK, throw error
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }
            
            const result = await response.json();
            console.log(`✅ API Response from ${endpoint}:`, result);
            
            return result;
        } catch (error) {
            console.error(`❌ API Error at ${endpoint}:`, error.message);
            
            // If backend is down, mark offline mode
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                console.log('🔌 Backend offline, using local storage');
                localStorage.setItem('bfitOfflineMode', 'true');
                throw new Error('Backend is offline. Using local storage mode.');
            }
            
            throw new Error(error.message || 'API request failed');
        }
    },
    
    // ✅ ENHANCED: Register with MongoDB sync
    async register(userData) {
        try {
            // Try real MongoDB registration
            const result = await this.request('/auth/register', 'POST', userData);
            
            // Save to MongoDB successful
            this.setToken(result.token);
            localStorage.setItem('bfitCurrentUser', JSON.stringify(result.user));
            localStorage.setItem('bfitUserId', result.user._id || result.userId);
            localStorage.setItem('bfitOfflineMode', 'false'); // Online mode
            
            return result;
        } catch (error) {
            console.log('API register failed, saving to local storage');
            
            // Generate a unique local ID
            const userId = 'local-id-' + Date.now();
            const user = {
                _id: userId,
                name: userData.name,
                phone: userData.phone,
                gender: userData.gender,
                age: userData.age,
                password: userData.password
            };
            
            // Save user data
            localStorage.setItem('bfitCurrentUser', JSON.stringify(user));
            localStorage.setItem('bfitUserId', userId);
            localStorage.setItem('bfitOfflineMode', 'true');
            
            // Save to users list
            const users = JSON.parse(localStorage.getItem('bfitUsers')) || [];
            users.push(user);
            localStorage.setItem('bfitUsers', JSON.stringify(users));
            
            // Set offline token
            this.setToken('offline-token');
            
            return {
                token: 'offline-token',
                user: user
            };
        }
    },
    
    // ✅ ENHANCED: Login with MongoDB sync
    async login(phone, password) {
        try {
            // Try real MongoDB login
            const result = await this.request('/auth/login', 'POST', { phone, password });
            
            // Login successful - online mode
            this.setToken(result.token);
            localStorage.setItem('bfitCurrentUser', JSON.stringify(result.user));
            localStorage.setItem('bfitUserId', result.user._id);
            localStorage.setItem('bfitOfflineMode', 'false');
            
            // Get streak from MongoDB
            let streakData = { currentStreak: 0, highestStreak: 0 };
            try {
                const streakResult = await this.request(`/streak/${result.user._id}`, 'GET');
                if (streakResult.streak) {
                    streakData = streakResult.streak;
                }
            } catch (streakError) {
                console.log('Could not fetch streak from MongoDB:', streakError.message);
            }
            
            return {
                token: result.token,
                user: result.user,
                streak: streakData
            };
        } catch (error) {
            console.log('API login failed, trying local storage');
            
            // Fallback to local storage
            const users = JSON.parse(localStorage.getItem('bfitUsers')) || [];
            const user = users.find(u => u.phone === phone && u.password === password);
            
            if (!user) {
                throw new Error('Invalid phone number or password');
            }
            
            // Save as current user
            localStorage.setItem('bfitCurrentUser', JSON.stringify(user));
            localStorage.setItem('bfitUserId', user._id || 'local-id');
            localStorage.setItem('bfitOfflineMode', 'true');
            this.setToken('offline-token');
            
            // Get streak from local storage
            const savedStreak = localStorage.getItem('bfitCurrentStreak');
            const savedHighestStreak = localStorage.getItem('bfitHighestStreak');
            
            return {
                token: 'offline-token',
                user: user,
                streak: {
                    currentStreak: savedStreak ? parseInt(savedStreak) : 0,
                    highestStreak: savedHighestStreak ? parseInt(savedHighestStreak) : 0
                }
            };
        }
    },
    
    async getProfile() {
        try {
            // Try API first
            const userId = localStorage.getItem('bfitUserId');
            if (userId && localStorage.getItem('bfitOfflineMode') !== 'true') {
                const result = await this.request(`/auth/profile/${userId}`, 'GET');
                return result;
            }
            
            // Fallback to local storage
            const user = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
            const profileData = JSON.parse(localStorage.getItem('bfitProfileData') || '{}');
            
            return {
                user: {
                    ...user,
                    ...profileData
                }
            };
        } catch (error) {
            console.log('Getting profile from local storage');
            
            // Get from local storage
            const user = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
            const profileData = JSON.parse(localStorage.getItem('bfitProfileData') || '{}');
            
            return {
                user: {
                    ...user,
                    ...profileData
                }
            };
        }
    },
    
    async updateProfile(profileData) {
        try {
            const userId = localStorage.getItem('bfitUserId');
            if (userId && localStorage.getItem('bfitOfflineMode') !== 'true') {
                const result = await this.request(`/auth/profile/${userId}`, 'PUT', profileData);
                
                // Update local storage
                const currentUser = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
                const updatedUser = { ...currentUser, ...profileData };
                localStorage.setItem('bfitCurrentUser', JSON.stringify(updatedUser));
                localStorage.setItem('bfitProfileData', JSON.stringify(profileData));
                
                return {
                    user: updatedUser
                };
            } else {
                throw new Error('Offline mode');
            }
        } catch (error) {
            console.log('Saving profile to local storage');
            
            // Save to local storage
            const currentUser = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
            const updatedUser = { ...currentUser, ...profileData };
            localStorage.setItem('bfitCurrentUser', JSON.stringify(updatedUser));
            localStorage.setItem('bfitProfileData', JSON.stringify(profileData));
            
            return {
                user: updatedUser
            };
        }
    },
    
    // ✅ ENHANCED: Streak endpoints with MongoDB support
    async updateStreak() {
        const now = new Date();
        const today = now.toDateString();
        
        // Don't update streak on Sunday
        if (now.getDay() === 0) {
            return {
                streak: {
                    currentStreak: AppState.currentStreak,
                    highestStreak: AppState.highestStreak
                }
            };
        }
        
        // Calculate streak locally first
        const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
        let currentStreak = parseInt(localStorage.getItem('bfitCurrentStreak') || '0');
        let highestStreak = parseInt(localStorage.getItem('bfitHighestStreak') || '0');
        
        if (!lastWorkoutDate) {
            currentStreak = 1;
        } else {
            const lastDate = new Date(lastWorkoutDate);
            const diffTime = Math.abs(now - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                currentStreak++;
            } else if (diffDays > 1) {
                currentStreak = 1;
            }
        }
        
        // Update highest streak if current is higher
        if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
        }
        
        // Save to localStorage
        localStorage.setItem('bfitCurrentStreak', currentStreak);
        localStorage.setItem('bfitHighestStreak', highestStreak);
        localStorage.setItem('bfitLastWorkoutDate', today);
        
        // Update AppState
        AppState.currentStreak = currentStreak;
        AppState.highestStreak = highestStreak;
        
        // Try to save to MongoDB if online
        try {
            const userId = localStorage.getItem('bfitUserId');
            const isOfflineMode = localStorage.getItem('bfitOfflineMode') === 'true';
            
            if (userId && !isOfflineMode) {
                const result = await this.request('/streak/update', 'POST', {
                    userId: userId,
                    currentStreak: currentStreak,
                    highestStreak: highestStreak,
                    lastWorkoutDate: today
                });
                console.log('✅ Streak saved to MongoDB');
            }
        } catch (error) {
            console.log('MongoDB save failed, using local storage only');
            localStorage.setItem('bfitOfflineMode', 'true');
        }
        
        return {
            streak: {
                currentStreak: currentStreak,
                highestStreak: highestStreak
            }
        };
    },
    
    async getStreak() {
        try {
            const userId = localStorage.getItem('bfitUserId');
            const isOfflineMode = localStorage.getItem('bfitOfflineMode') === 'true';
            
            if (userId && !isOfflineMode) {
                const result = await this.request(`/streak/${userId}`, 'GET');
                if (result.streak) {
                    // Update local storage with MongoDB data
                    localStorage.setItem('bfitCurrentStreak', result.streak.currentStreak);
                    localStorage.setItem('bfitHighestStreak', result.streak.highestStreak);
                    AppState.currentStreak = result.streak.currentStreak;
                    AppState.highestStreak = result.streak.highestStreak;
                }
                return result;
            } else {
                throw new Error('Offline mode');
            }
        } catch (error) {
            console.log('Getting streak from local storage');
            
            // Get from local storage
            const currentStreak = parseInt(localStorage.getItem('bfitCurrentStreak') || '0');
            const highestStreak = parseInt(localStorage.getItem('bfitHighestStreak') || '0');
            
            return {
                streak: {
                    currentStreak: currentStreak,
                    highestStreak: highestStreak
                }
            };
        }
    },
    
    // ✅ NEW: Sync local streak with MongoDB when coming back online
    async syncStreakWithMongoDB() {
        try {
            const userId = localStorage.getItem('bfitUserId');
            const currentStreak = parseInt(localStorage.getItem('bfitCurrentStreak') || '0');
            const highestStreak = parseInt(localStorage.getItem('bfitHighestStreak') || '0');
            const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
            
            if (userId && currentStreak > 0) {
                await this.request('/streak/sync', 'POST', {
                    userId: userId,
                    currentStreak: currentStreak,
                    highestStreak: highestStreak,
                    lastWorkoutDate: lastWorkoutDate
                });
                console.log('✅ Streak synced with MongoDB');
                localStorage.setItem('bfitOfflineMode', 'false');
                return true;
            }
        } catch (error) {
            console.log('Streak sync failed:', error.message);
            return false;
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

// ✅ UPDATED: Dashboard Functions with better login persistence
async function updateDashboard() {
    try {
        console.log('Updating dashboard...');
        
        // Load from local storage first (for immediate display)
        loadFromLocalStorage();
        
        // Check if user is logged in (using multiple indicators)
        const currentUser = localStorage.getItem('bfitCurrentUser');
        const token = ApiService.getToken();
        const offlineMode = localStorage.getItem('bfitOfflineMode');
        
        if (currentUser) {
            // User is logged in (either online or offline)
            try {
                // Try to load profile from API if online
                if (token && token !== 'offline-token' && offlineMode !== 'true') {
                    try {
                        const profileResult = await ApiService.getProfile();
                        if (profileResult.user) {
                            AppState.user = profileResult.user;
                            
                            // Update sidebar
                            const sidebarName = document.getElementById('sidebarUserName');
                            const sidebarPhone = document.getElementById('sidebarUserPhone');
                            if (sidebarName) sidebarName.textContent = AppState.user.name || 'User';
                            if (sidebarPhone) sidebarPhone.textContent = AppState.user.phone || 'N/A';
                        }
                    } catch (apiError) {
                        console.log('API profile failed, using local:', apiError.message);
                    }
                }
            } catch (error) {
                console.log('Dashboard update error:', error);
            }
        }
        
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

// ✅ UPDATED: Update Streak Function with better MongoDB handling
async function updateStreak() {
    try {
        // Always update locally first for immediate feedback
        const now = new Date();
        const today = now.toDateString();
        
        // Don't update streak on Sunday
        if (now.getDay() === 0) {
            console.log('Sunday - no streak update');
            return;
        }
        
        const lastWorkoutDate = localStorage.getItem('bfitLastWorkoutDate');
        let currentStreak = parseInt(localStorage.getItem('bfitCurrentStreak') || '0');
        let highestStreak = parseInt(localStorage.getItem('bfitHighestStreak') || '0');
        
        if (!lastWorkoutDate) {
            currentStreak = 1;
        } else {
            const lastDate = new Date(lastWorkoutDate);
            const diffTime = Math.abs(now - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                currentStreak++;
            } else if (diffDays > 1) {
                currentStreak = 1;
            }
        }
        
        if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
        }
        
        // Update local storage
        localStorage.setItem('bfitCurrentStreak', currentStreak);
        localStorage.setItem('bfitHighestStreak', highestStreak);
        localStorage.setItem('bfitLastWorkoutDate', today);
        
        // Update AppState
        AppState.currentStreak = currentStreak;
        AppState.highestStreak = highestStreak;
        
        // Update dashboard display
        const currentStreakElement = document.getElementById('currentStreakCount');
        if (currentStreakElement) {
            currentStreakElement.textContent = currentStreak;
        }
        
        console.log(`✅ Streak updated: ${currentStreak} days (Highest: ${highestStreak})`);
        
        // Try to sync with MongoDB if online
        try {
            await ApiService.updateStreak();
            console.log('✅ Streak synced with MongoDB');
        } catch (apiError) {
            console.log('❌ MongoDB sync failed, using local storage only');
        }
        
    } catch (error) {
        console.error('Streak update error:', error);
    }
}

function updateCompletionPage() {
    document.getElementById('updatedStreak').textContent = AppState.currentStreak;
}

// ✅ UPDATED: Profile Functions
async function loadProfilePage() {
    try {
        // Load from local storage first
        const savedUser = localStorage.getItem('bfitCurrentUser');
        const profileData = JSON.parse(localStorage.getItem('bfitProfileData') || '{}');
        
        if (savedUser) {
            AppState.user = JSON.parse(savedUser);
            
            document.getElementById('profileUserName').textContent = AppState.user.name || 'User';
            document.getElementById('profileUserPhone').textContent = AppState.user.phone || 'N/A';
            document.getElementById('profileName').value = AppState.user.name || '';
            document.getElementById('profilePhone').value = AppState.user.phone || '';
            document.getElementById('profileAge').value = profileData.age || AppState.user.age || '';
            document.getElementById('profileGender').value = profileData.gender || AppState.user.gender || '';
        }
        
        // Try to load from MongoDB if online
        const isOfflineMode = localStorage.getItem('bfitOfflineMode') === 'true';
        if (!isOfflineMode && ApiService.getToken() !== 'offline-token') {
            try {
                const profileResult = await ApiService.getProfile();
                if (profileResult.user) {
                    AppState.user = profileResult.user;
                    
                    document.getElementById('profileUserName').textContent = AppState.user.name || 'User';
                    document.getElementById('profileUserPhone').textContent = AppState.user.phone || 'N/A';
                    document.getElementById('profileName').value = AppState.user.name || '';
                    document.getElementById('profilePhone').value = AppState.user.phone || '';
                    document.getElementById('profileAge').value = AppState.user.age || '';
                    document.getElementById('profileGender').value = AppState.user.gender || '';
                }
            } catch (apiError) {
                console.log('API profile load failed:', apiError.message);
            }
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
        
        // Save to API if online
        const isOfflineMode = localStorage.getItem('bfitOfflineMode') === 'true';
        if (!isOfflineMode && ApiService.getToken() !== 'offline-token') {
            try {
                const result = await ApiService.updateProfile(profileData);
                AppState.user = result.user;
                showAlert("Profile Saved", "Your profile has been saved to MongoDB!", "success");
            } catch (apiError) {
                console.log('API save failed, saving locally:', apiError.message);
            }
        }
        
        // Always save locally
        const currentUser = JSON.parse(localStorage.getItem('bfitCurrentUser') || '{}');
        const updatedUser = { ...currentUser, ...profileData };
        localStorage.setItem('bfitCurrentUser', JSON.stringify(updatedUser));
        localStorage.setItem('bfitProfileData', JSON.stringify(profileData));
        
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

// ✅ UPDATED: Local Storage User Management
function saveUserToLocal(user) {
    let users = JSON.parse(localStorage.getItem('bfitUsers')) || [];
    
    const existingUserIndex = users.findIndex(u => u.phone === user.phone);
    if (existingUserIndex !== -1) {
        users[existingUserIndex] = user;
    } else {
        users.push(user);
    }
    
    localStorage.setItem('bfitUsers', JSON.stringify(users));
    localStorage.setItem('bfitCurrentUser', JSON.stringify(user));
    localStorage.setItem('bfitUserId', user._id || 'local-id');
    localStorage.setItem('bfitOfflineMode', 'true');
    
    // Save profile data separately
    const profileData = {
        gender: user.gender,
        age: user.age
    };
    localStorage.setItem('bfitProfileData', JSON.stringify(profileData));
    
    AppState.user = user;
    
    // Update sidebar
    const sidebarName = document.getElementById('sidebarUserName');
    const sidebarPhone = document.getElementById('sidebarUserPhone');
    if (sidebarName) sidebarName.textContent = user.name;
    if (sidebarPhone) sidebarPhone.textContent = user.phone;
}

function loginUserFromLocal(phone, password) {
    const users = JSON.parse(localStorage.getItem('bfitUsers')) || [];
    const user = users.find(u => u.phone === phone && u.password === password);
    
    if (user) {
        localStorage.setItem('bfitCurrentUser', JSON.stringify(user));
        localStorage.setItem('bfitUserId', user._id || 'local-id');
        localStorage.setItem('bfitOfflineMode', 'true');
        AppState.user = user;
        
        // Update sidebar
        const sidebarName = document.getElementById('sidebarUserName');
        const sidebarPhone = document.getElementById('sidebarUserPhone');
        if (sidebarName) sidebarName.textContent = user.name;
        if (sidebarPhone) sidebarPhone.textContent = user.phone;
        
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

// ✅ UPDATED: Event Listeners with FIXED login persistence
document.addEventListener('DOMContentLoaded', function() {
    console.log('B-FIT App Initializing...');
    
    // Initialize countdown timer
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
    
    // ✅ FIXED: Register Form
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
            
            // Save to local storage as fallback
            saveUserToLocal(userData);
            
            // Set token
            ApiService.setToken(result.token);
            
            // Update AppState
            AppState.user = result.user;
            
            // Navigate to dashboard
            setTimeout(() => {
                hideAlert();
                localStorage.setItem('bfitOfflineMode', 'true'); // Mark as offline mode
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
    
    // ✅ FIXED: Login Form
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
            
            // Update streak from result
            if (result.streak) {
                AppState.currentStreak = result.streak.currentStreak || 0;
                AppState.highestStreak = result.streak.highestStreak || 0;
                
                // Update localStorage
                localStorage.setItem('bfitCurrentStreak', AppState.currentStreak);
                localStorage.setItem('bfitHighestStreak', AppState.highestStreak);
                
                // Update display
                const currentStreakElement = document.getElementById('currentStreakCount');
                if (currentStreakElement) {
                    currentStreakElement.textContent = AppState.currentStreak;
                }
            }
            
            // Navigate to dashboard
            setTimeout(() => {
                hideAlert();
                localStorage.setItem('bfitOfflineMode', 'true'); // Mark as logged in
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
    
    // ✅ FIXED: Check if user is already logged in on page load
    setTimeout(() => {
        const currentUser = localStorage.getItem('bfitCurrentUser');
        const offlineMode = localStorage.getItem('bfitOfflineMode');
        
        // If user exists in localStorage (even if in offline mode), redirect to dashboard
        if (currentUser && offlineMode === 'true') {
            console.log('User already logged in (offline mode), redirecting to dashboard...');
            navigateTo('dashboard');
        }
        // If user has a valid token (online mode), also redirect to dashboard
        else if (currentUser && ApiService.getToken() && ApiService.getToken() !== 'offline-token') {
            console.log('User already logged in (online mode), redirecting to dashboard...');
            navigateTo('dashboard');
        }
        // Do NOT automatically navigate to hero page if not logged in
    }, 1000);
});

// ✅ ADD: Test Backend Connection on Load
window.addEventListener('load', function() {
    console.log('Testing backend connection...');
    
    // Check if we're already in offline mode
    const isOfflineMode = localStorage.getItem('bfitOfflineMode') === 'true';
    
    // Only check backend if not already marked as offline
    if (!isOfflineMode) {
        fetch('https://b-fit-backend-jy2e.onrender.com/api/health', {
            method: 'GET',
            timeout: 5000 // 5 second timeout
        })
        .then(response => {
            if (response.ok) {
                console.log('✅ Backend is reachable');
                localStorage.setItem('bfitOfflineMode', 'false');
                return response.json();
            } else {
                throw new Error('Backend not responding');
            }
        })
        .then(data => {
            console.log('Backend status:', data);
            // If we have data in localStorage, try to sync with MongoDB
            const userId = localStorage.getItem('bfitUserId');
            if (userId) {
                ApiService.syncStreakWithMongoDB().then(synced => {
                    if (synced) {
                        console.log('✅ Data synced with MongoDB');
                    }
                });
            }
        })
        .catch(error => {
            console.log('❌ Backend is offline:', error.message);
            localStorage.setItem('bfitOfflineMode', 'true');
            console.log('Using offline/local storage mode');
        });
    } else {
        console.log('Already in offline mode');
    }
});

// ✅ ADD: Function to check login status on page refresh
function checkLoginStatus() {
    const currentUser = localStorage.getItem('bfitCurrentUser');
    const token = ApiService.getToken();
    const offlineMode = localStorage.getItem('bfitOfflineMode');
    
    return !!(currentUser && (token || offlineMode === 'true'));
}

// ✅ ADD: Auto-check login status every time the page becomes visible
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        if (checkLoginStatus() && AppState.currentPage === 'hero') {
            navigateTo('dashboard');
        }
    }
});