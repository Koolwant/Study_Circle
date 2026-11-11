// Study Circle — Premium Student Partner Matching & Study Groups
// Real algorithmic compatibility engine, weekly availability synchrony, interactive groups & persistence

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const SLOTS = ['Morning', 'Afternoon', 'Evening', 'Night'];

const makeAvail = (sparse) => {
  const base = { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [], Sat: [], Sun: [] };
  return Object.assign(base, sparse);
};

const SEED_STUDENTS = [
  {
    id: 'maya',
    name: 'Maya Chen',
    initials: 'MC',
    color: '#f6b089',
    major: 'Computer Science + Design',
    year: 'Junior',
    school: 'Northbridge University',
    bio: 'Building thoughtful systems, one late-night problem set at a time.',
    courses: ['CS 61B', 'DES 140', 'MATH 54'],
    interests: ['Human-centered AI', 'Civic tech', 'Film photography'],
    learning: ['Visual', 'Problem-solving', 'Collaborative'],
    venue: 'Quiet library corner',
    session: '90-minute blocks',
    availability: makeAvail({
      Mon: ['Evening'],
      Tue: ['Afternoon', 'Evening'],
      Wed: ['Evening'],
      Thu: ['Afternoon', 'Evening'],
      Fri: ['Afternoon'],
      Sun: ['Morning', 'Afternoon']
    }),
    streak: 18
  },
  {
    id: 'nico',
    name: 'Nico Alvarez',
    initials: 'NA',
    color: '#91a6ef',
    major: 'Computer Science',
    year: 'Sophomore',
    school: 'Northbridge University',
    bio: 'Algorithms, espresso, and explaining recursion with terrible metaphors.',
    courses: ['CS 61B', 'MATH 54', 'STAT 134'],
    interests: ['Developer tools', 'Bouldering', 'Indie games'],
    learning: ['Visual', 'Problem-solving', 'Collaborative'],
    venue: 'Library whiteboards',
    session: '2-hour deep dives',
    availability: makeAvail({
      Mon: ['Evening'],
      Tue: ['Evening'],
      Wed: ['Afternoon', 'Evening'],
      Thu: ['Evening'],
      Sat: ['Morning'],
      Sun: ['Afternoon']
    }),
    streak: 9
  },
  {
    id: 'amina',
    name: 'Amina Yusuf',
    initials: 'AY',
    color: '#d7afe5',
    major: 'Data Science',
    year: 'Junior',
    school: 'Northbridge University',
    bio: 'I turn messy questions into models worth discussing.',
    courses: ['CS 61B', 'STAT 134', 'DATA 100'],
    interests: ['Climate data', 'Book clubs', 'Running'],
    learning: ['Reading / Writing', 'Visual', 'Collaborative'],
    venue: 'Sunlit study lounge',
    session: '50/10 pomodoros',
    availability: makeAvail({
      Tue: ['Afternoon', 'Evening'],
      Wed: ['Evening'],
      Thu: ['Afternoon'],
      Fri: ['Afternoon', 'Evening'],
      Sun: ['Morning', 'Afternoon']
    }),
    streak: 24
  },
  {
    id: 'jules',
    name: 'Jules Park',
    initials: 'JP',
    color: '#8cc6b4',
    major: 'Mechanical Engineering',
    year: 'Junior',
    school: 'Northbridge University',
    bio: 'Here for the free-body diagrams and the post-study dumplings.',
    courses: ['MATH 54', 'PHYS 7B', 'ME 102'],
    interests: ['Robotics', 'Ceramics', 'Formula 1'],
    learning: ['Kinesthetic', 'Problem-solving', 'Independent'],
    venue: 'Engineering lab tables',
    session: '2-hour deep dives',
    availability: makeAvail({
      Mon: ['Afternoon'],
      Wed: ['Afternoon', 'Evening'],
      Thu: ['Evening'],
      Fri: ['Afternoon'],
      Sat: ['Morning', 'Afternoon']
    }),
    streak: 12
  },
  {
    id: 'lena',
    name: 'Lena Ortiz',
    initials: 'LO',
    color: '#e6c66b',
    major: 'Cognitive Science',
    year: 'Senior',
    school: 'Northbridge University',
    bio: 'Curious about how people learn, remember, and make things.',
    courses: ['CS 61B', 'COGSCI 131', 'PSYCH 101'],
    interests: ['Learning science', 'UX research', 'Baking'],
    learning: ['Auditory', 'Reading / Writing', 'Collaborative'],
    venue: 'Coffee shop booth',
    session: '90-minute blocks',
    availability: makeAvail({
      Mon: ['Evening'],
      Tue: ['Afternoon'],
      Wed: ['Evening'],
      Thu: ['Afternoon', 'Evening'],
      Sun: ['Afternoon', 'Night']
    }),
    streak: 31
  },
  {
    id: 'theo',
    name: 'Theo Grant',
    initials: 'TG',
    color: '#f0aa91',
    major: 'Applied Mathematics',
    year: 'Sophomore',
    school: 'Northbridge University',
    bio: 'Making proofs feel less like a locked room mystery.',
    courses: ['MATH 54', 'CS 61B', 'MATH 110'],
    interests: ['Puzzle hunts', 'Jazz piano', 'Economics'],
    learning: ['Reading / Writing', 'Problem-solving', 'Independent'],
    venue: 'Silent floor, stacks 4–6',
    session: '90-minute blocks',
    availability: makeAvail({
      Mon: ['Evening'],
      Tue: ['Evening'],
      Wed: ['Evening'],
      Thu: ['Afternoon'],
      Fri: ['Afternoon'],
      Sun: ['Morning', 'Afternoon']
    }),
    streak: 15
  },
  {
    id: 'sora',
    name: 'Sora Kim',
    initials: 'SK',
    color: '#99cfda',
    major: 'Biology',
    year: 'Junior',
    school: 'Northbridge University',
    bio: 'Pre-med, people person, compulsive color-coder of lecture notes.',
    courses: ['BIO 1A', 'CHEM 3A', 'STAT 134'],
    interests: ['Public health', 'Pilates', 'K-dramas'],
    learning: ['Visual', 'Reading / Writing', 'Collaborative'],
    venue: 'Life sciences atrium',
    session: '50/10 pomodoros',
    availability: makeAvail({
      Tue: ['Morning', 'Afternoon'],
      Thu: ['Morning', 'Afternoon'],
      Fri: ['Afternoon'],
      Sat: ['Morning']
    }),
    streak: 20
  },
  {
    id: 'owen',
    name: 'Owen Brooks',
    initials: 'OB',
    color: '#b0bf72',
    major: 'Economics',
    year: 'Senior',
    school: 'Northbridge University',
    bio: 'I like a clean model, a good debate, and a 7am swim.',
    courses: ['ECON 101A', 'STAT 134', 'MATH 54'],
    interests: ['Behavioral economics', 'Swimming', 'Podcasts'],
    learning: ['Auditory', 'Problem-solving', 'Collaborative'],
    venue: 'Business school commons',
    session: '2-hour deep dives',
    availability: makeAvail({
      Mon: ['Morning'],
      Wed: ['Morning', 'Afternoon'],
      Fri: ['Morning', 'Afternoon'],
      Sun: ['Morning']
    }),
    streak: 7
  }
];

const SEED_GROUPS = [
  {
    id: 'g1',
    title: 'Data Structures Lab',
    course: 'CS 61B',
    description: 'Weekly problem sets, visual walkthroughs, and a friendly code review ritual.',
    members: ['maya', 'nico', 'amina'],
    limit: 6,
    day: 'Thu',
    slot: 'Evening',
    location: 'Moffitt · Table 14',
    accent: '#5544d6',
    creator: 'maya'
  },
  {
    id: 'g2',
    title: 'Linear Algebra, Together',
    course: 'MATH 54',
    description: 'For people who prefer their eigenvectors with conversation.',
    members: ['maya', 'jules', 'theo'],
    limit: 5,
    day: 'Wed',
    slot: 'Afternoon',
    location: 'Evans · 2nd floor',
    accent: '#cb6b4d',
    creator: 'theo'
  },
  {
    id: 'g3',
    title: 'Stats Studio',
    course: 'STAT 134',
    description: 'Practice exams and collaborative R sessions before Friday lecture.',
    members: ['nico', 'amina', 'sora', 'owen'],
    limit: 6,
    day: 'Fri',
    slot: 'Afternoon',
    location: 'Online · Study Circle room',
    accent: '#2a8a72',
    creator: 'amina'
  },
  {
    id: 'g4',
    title: 'Focus Friday',
    course: 'Open study',
    description: 'No agenda beyond showing up and doing the work. Quiet accountability.',
    members: ['lena', 'sora'],
    limit: 8,
    day: 'Fri',
    slot: 'Afternoon',
    location: 'Doe Library · North Reading',
    accent: '#4333b8',
    creator: 'lena'
  }
];

// Persistent State
function loadState() {
  try {
    const raw = localStorage.getItem('study_circle_app_state');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse state:', e);
  }
  return {
    students: SEED_STUDENTS,
    groups: SEED_GROUPS,
    currentUserId: 'maya',
    savedIds: ['nico'],
    requests: [
      {
        id: 'r1',
        from: 'nico',
        to: 'maya',
        note: 'Hey Maya! Want to team up for CS 61B problem set 3? Our schedules align on Thursday evening.',
        status: 'pending'
      }
    ]
  };
}

let appState = loadState();

function persist() {
  try {
    localStorage.setItem('study_circle_app_state', JSON.stringify(appState));
  } catch (e) {
    console.error('Storage error:', e);
  }
}

// Current View & Modal State
let currentTab = 'discover'; // 'discover' | 'groups' | 'schedule' | 'network' | 'profile'
let modalState = null; // { type: 'inspect' | 'invite' | 'create_group' | 'group_detail', data: any }
let filterQuery = '';
let filterCourse = 'All';
let filterStyle = 'All';
let filterMinScore = 0;

// Helper Getters
const getCurrentUser = () => appState.students.find(s => s.id === appState.currentUserId) || appState.students[0];
const getStudentById = (id) => appState.students.find(s => s.id === id);

// Algorithmic Compatibility Matching Engine
function calculateMatch(userA, userB) {
  const intersect = (arr1, arr2) => arr1.filter(x => arr2.includes(x));

  // 1. Course Overlap (35% weight)
  const commonCourses = intersect(userA.courses, userB.courses);
  const deptA = userA.courses.map(c => c.split(' ')[0]);
  const deptB = userB.courses.map(c => c.split(' ')[0]);
  const commonDepts = intersect(deptA, deptB);
  const minCoursesLen = Math.max(1, Math.min(userA.courses.length, userB.courses.length));
  const courseScore = Math.min(100, Math.round(
    (commonCourses.length / minCoursesLen * 82) +
    (commonDepts.length / minCoursesLen * 18)
  ));

  // 2. Schedule Synchrony (25% weight)
  let commonSlots = 0;
  for (const day of DAYS) {
    const slotsA = userA.availability[day] || [];
    const slotsB = userB.availability[day] || [];
    commonSlots += intersect(slotsA, slotsB).length;
  }
  const totalSlotsA = Object.values(userA.availability).flat().length;
  const totalSlotsB = Object.values(userB.availability).flat().length;
  const minSlotsTotal = Math.max(1, Math.min(totalSlotsA, totalSlotsB));
  const scheduleScore = Math.min(100, Math.round((commonSlots / minSlotsTotal) * 100));

  // 3. Learning Style Harmony (20% weight)
  const commonStyles = intersect(userA.learning, userB.learning);
  const stylesScore = Math.min(100, Math.round((commonStyles.length / 3) * 100));

  // 4. Study Habit & Venue Fit (10% weight)
  const venueMatch = userA.venue === userB.venue ? 60 : 30;
  const sessionMatch = userA.session === userB.session ? 40 : 15;
  const habitsScore = venueMatch + sessionMatch;

  // 5. Shared Academic/Personal Interests (10% weight)
  const commonInterests = intersect(userA.interests, userB.interests);
  const interestsScore = Math.min(100, Math.round((commonInterests.length / 3) * 100));

  // Total Weighted Composite Score
  const compositeScore = Math.round(
    (courseScore * 0.35) +
    (scheduleScore * 0.25) +
    (stylesScore * 0.20) +
    (habitsScore * 0.10) +
    (interestsScore * 0.10)
  );

  // Concrete, human-explainable reasons for match
  const reasons = [];
  if (commonCourses.length > 0) {
    reasons.push(`Both enrolled in ${commonCourses.slice(0, 2).join(' · ')}`);
  }
  if (commonSlots >= 3) {
    reasons.push(`${commonSlots} mutual study windows open this week`);
  }
  if (commonStyles.length >= 2) {
    reasons.push(`Complementary ${commonStyles.slice(0, 2).join(' + ')} study rhythms`);
  }
  if (userA.venue === userB.venue) {
    reasons.push(`Both prefer ${userA.venue}`);
  }
  if (reasons.length === 0) {
    reasons.push('Complementary academic focus outside your primary discipline');
  }

  return {
    score: compositeScore,
    courses: courseScore,
    schedule: scheduleScore,
    styles: stylesScore,
    habits: habitsScore,
    interests: interestsScore,
    commonCourses,
    commonSlots,
    reasons
  };
}

// Global Actions
window.switchUser = function(newId) {
  appState.currentUserId = newId;
  persist();
  renderApp();
  showToast(`Switched view to ${getCurrentUser().name}`);
};

window.setViewTab = function(tabName) {
  currentTab = tabName;
  renderApp();
};

window.toggleSaveStudent = function(id) {
  if (appState.savedIds.includes(id)) {
    appState.savedIds = appState.savedIds.filter(x => x !== id);
    showToast('Removed profile from saved list');
  } else {
    appState.savedIds.push(id);
    showToast('Saved student profile');
  }
  persist();
  renderApp();
};

window.toggleScheduleSlot = function(day, slot) {
  const currentU = getCurrentUser();
  const currentSlots = currentU.availability[day] || [];
  if (currentSlots.includes(slot)) {
    currentU.availability[day] = currentSlots.filter(s => s !== slot);
  } else {
    currentU.availability[day] = [...currentSlots, slot];
  }
  persist();
  renderApp();
};

window.joinOrLeaveGroup = function(groupId) {
  const currentU = getCurrentUser();
  const grp = appState.groups.find(g => g.id === groupId);
  if (!grp) return;

  if (grp.members.includes(currentU.id)) {
    grp.members = grp.members.filter(m => m !== currentU.id);
    showToast(`You left ${grp.title}`);
  } else if (grp.members.length < grp.limit) {
    grp.members.push(currentU.id);
    showToast(`Joined ${grp.title}!`);
  }
  persist();
  renderApp();
};

window.handleRequestDecision = function(reqId, status) {
  const req = appState.requests.find(r => r.id === reqId);
  if (req) {
    req.status = status;
    persist();
    showToast(status === 'accepted' ? 'Study invitation accepted!' : 'Invitation declined');
    renderApp();
  }
};

window.sendStudyInvite = function(event, targetStudentId) {
  event.preventDefault();
  const noteInput = document.getElementById('invite-note-text');
  const targetStudent = getStudentById(targetStudentId);
  const note = noteInput && noteInput.value.trim()
    ? noteInput.value.trim()
    : `Hi ${targetStudent.name}! Want to study ${targetStudent.courses[0] || 'problem sets'} together?`;

  appState.requests.push({
    id: 'req_' + Date.now(),
    from: appState.currentUserId,
    to: targetStudentId,
    note,
    status: 'pending'
  });

  persist();
  modalState = null;
  renderApp();
  showToast(`Invitation sent to ${targetStudent.name}!`);
};

window.createStudyGroup = function(event) {
  event.preventDefault();
  const form = event.target;
  const currentU = getCurrentUser();
  const newG = {
    id: 'grp_' + Date.now(),
    title: form.title.value.trim(),
    course: form.course.value.trim(),
    description: form.desc.value.trim(),
    members: [currentU.id],
    limit: 6,
    day: form.day.value,
    slot: form.slot.value,
    location: form.location.value.trim(),
    accent: '#5544d6',
    creator: currentU.id
  };

  appState.groups.push(newG);
  persist();
  modalState = null;
  currentTab = 'groups';
  renderApp();
  showToast(`Created new circle: ${newG.title}`);
};

window.openModal = function(type, data) {
  modalState = { type, data };
  renderApp();
};

window.closeModal = function() {
  modalState = null;
  renderApp();
};

window.resetDemoData = function() {
  if (confirm('Reset all profiles, groups, schedule windows, and requests back to default?')) {
    localStorage.removeItem('study_circle_app_state');
    appState = loadState();
    modalState = null;
    currentTab = 'discover';
    renderApp();
    showToast('Application reset to initial demo state');
  }
};

window.updateFilter = function(key, val) {
  if (key === 'q') filterQuery = val;
  if (key === 'course') filterCourse = val;
  if (key === 'style') filterStyle = val;
  if (key === 'min') filterMinScore = val;
  renderApp();
};

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2600);
}

// UI Rendering Functions
function renderApp() {
  const container = document.getElementById('app');
  if (!container) return;

  const currentU = getCurrentUser();
  const allCourses = ['All', ...new Set(appState.students.flatMap(s => s.courses))].sort();
  const allStyles = ['All', ...new Set(appState.students.flatMap(s => s.learning))].sort();

  // Match calculations for candidates
  const candidates = appState.students
    .filter(s => s.id !== currentU.id)
    .map(s => ({ student: s, match: calculateMatch(currentU, s) }))
    .filter(({ student, match }) => {
      if (filterMinScore > 0 && match.score < filterMinScore) return false;
      if (filterCourse !== 'All' && !student.courses.includes(filterCourse)) return false;
      if (filterStyle !== 'All' && !student.learning.includes(filterStyle)) return false;
      if (filterQuery.trim()) {
        const q = filterQuery.toLowerCase();
        const matchesName = student.name.toLowerCase().includes(q);
        const matchesMajor = student.major.toLowerCase().includes(q);
        const matchesCourse = student.courses.some(c => c.toLowerCase().includes(q));
        if (!matchesName && !matchesMajor && !matchesCourse) return false;
      }
      return true;
    })
    .sort((a, b) => b.match.score - a.match.score);

  const pendingReceived = appState.requests.filter(r => r.to === currentU.id && r.status === 'pending');

  let contentHtml = '';

  // Tab 1: Discover Partners
  if (currentTab === 'discover') {
    contentHtml = `
      <section class="hero-editorial">
        <div>
          <h2 class="serif">Find the mind that complements your own.</h2>
          <p>
            Compatibility calculated from your shared courses, matching schedule blocks,
            learning habits, and preferred study environments.
          </p>
        </div>
        <div class="hero-meta">
          <div>
            <div class="hero-stat-value">${candidates.length}</div>
            <div class="hero-stat-label">Compatible Peers</div>
          </div>
          <div style="width: 1px; background: var(--border);"></div>
          <div>
            <div class="hero-stat-value">${currentU.courses.length}</div>
            <div class="hero-stat-label">Active Courses</div>
          </div>
        </div>
      </section>

      <!-- Filter Controls -->
      <div class="filters-strip">
        <input
          type="text"
          placeholder="Search by name, course (e.g. CS 61B), or major..."
          class="search-input"
          value="${filterQuery}"
          oninput="updateFilter('q', this.value)"
        />

        <div style="display: flex; gap: 6px; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--ink-secondary); font-weight: 600;">Course:</span>
          <select
            style="border: 1px solid var(--border); background: var(--surface); padding: 5px 10px; border-radius: 6px; font-size: 0.78rem; color: var(--ink);"
            onchange="updateFilter('course', this.value)"
          >
            ${allCourses.map(c => `<option value="${c}" ${c === filterCourse ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>

        <div style="display: flex; gap: 6px; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--ink-secondary); font-weight: 600;">Style:</span>
          <select
            style="border: 1px solid var(--border); background: var(--surface); padding: 5px 10px; border-radius: 6px; font-size: 0.78rem; color: var(--ink);"
            onchange="updateFilter('style', this.value)"
          >
            ${allStyles.map(s => `<option value="${s}" ${s === filterStyle ? 'selected' : ''}>${s}</option>`).join('')}
          </select>
        </div>

        <div style="display: flex; gap: 6px; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--ink-secondary); font-weight: 600;">Min Match:</span>
          <button class="filter-pill ${filterMinScore === 0 ? 'active' : ''}" onclick="updateFilter('min', 0)">All</button>
          <button class="filter-pill ${filterMinScore === 70 ? 'active' : ''}" onclick="updateFilter('min', 70)">70%+</button>
          <button class="filter-pill ${filterMinScore === 85 ? 'active' : ''}" onclick="updateFilter('min', 85)">85%+</button>
        </div>
      </div>

      <!-- Partner Cards Grid -->
      <div class="cards-grid">
        ${candidates.length === 0 ? `
          <div style="grid-column: 1 / -1; padding: 48px; background: var(--surface); border: 1px dashed var(--border); border-radius: 16px; text-align: center; color: var(--ink-secondary);">
            No compatible peers found matching those criteria. Try lowering the match threshold or clearing filters.
          </div>
        ` : candidates.map(({ student, match }) => {
          const isSaved = appState.savedIds.includes(student.id);
          const hasSent = appState.requests.some(r => r.from === currentU.id && r.to === student.id);
          return `
            <div class="student-card">
              <div>
                <div class="card-top">
                  <div style="display: flex; gap: 12px; align-items: center;">
                    <div class="avatar" style="background: ${student.color};">
                      ${student.initials}
                    </div>
                    <div class="student-meta">
                      <h3>${student.name}</h3>
                      <p>${student.major} · ${student.year}</p>
                    </div>
                  </div>
                  <div class="score-badge" title="Overall compatibility rating">
                    ${match.score}<span>%</span>
                  </div>
                </div>

                <p class="card-bio" style="margin: 14px 0;">
                  "${student.bio}"
                </p>

                <div style="margin-bottom: 12px;">
                  <div style="font-size: 0.72rem; color: var(--ink-secondary); margin-bottom: 6px; font-weight: 600;">
                    ENROLLED COURSES
                  </div>
                  <div class="card-tags">
                    ${student.courses.map(c => {
                      const shared = currentU.courses.includes(c);
                      return `<span class="tag ${shared ? 'match' : ''}">${shared ? '✓ ' : ''}${c}</span>`;
                    }).join('')}
                  </div>
                </div>

                <div class="match-reasons">
                  ${match.reasons.map(r => `
                    <div class="match-reason-item">
                      <span style="color: var(--accent); font-weight: bold;">•</span>
                      <span>${r}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div>
                <div class="card-actions">
                  <button class="btn-secondary" onclick="openModal('inspect', '${student.id}')">
                    Inspect Breakdown
                  </button>
                  <button class="btn-secondary" onclick="toggleSaveStudent('${student.id}')" style="color: ${isSaved ? 'var(--terracotta)' : 'inherit'};">
                    ${isSaved ? '★ Saved' : '☆ Save'}
                  </button>
                  <button class="btn-primary" ${hasSent ? 'disabled style="background: var(--parchment); color: var(--ink-secondary); cursor: default;"' : `onclick="openModal('invite', '${student.id}')"`}>
                    ${hasSent ? 'Invited' : 'Connect'}
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Tab 2: Study Groups
  else if (currentTab === 'groups') {
    contentHtml = `
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
        <div>
          <h2 class="serif" style="font-size: 2rem; letterSpacing: -0.02em;">Collaborative Circles</h2>
          <p style="color: var(--ink-secondary); font-size: 0.9rem; margin-top: 4px;">
            Structured study pods formed around specific coursework and upcoming milestones.
          </p>
        </div>
        <button class="btn-primary" style="padding: 10px 18px;" onclick="openModal('create_group')">
          + Create a Circle
        </button>
      </div>

      <div class="cards-grid">
        ${appState.groups.map(group => {
          const isMember = group.members.includes(currentU.id);
          const isFull = group.members.length >= group.limit;
          return `
            <div class="student-card" style="border-top: 4px solid ${group.accent};">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
                  <span class="tag match" style="font-size: 0.74rem;">${group.course}</span>
                  <span class="mono" style="font-size: 0.78rem; color: var(--ink-secondary);">
                    ${group.members.length}/${group.limit} members
                  </span>
                </div>

                <h3 style="font-size: 1.18rem; font-weight: 700; margin: 8px 0 6px; letter-spacing: -0.015em;">
                  ${group.title}
                </h3>
                <p style="font-size: 0.84rem; color: var(--ink-secondary); line-height: 1.45; margin-bottom: 16px;">
                  ${group.description}
                </p>

                <div style="background: var(--canvas); padding: 10px 14px; border-radius: 8px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 4px;">
                  <div>📅 <strong>Every ${group.day} · ${group.slot}</strong></div>
                  <div>📍 ${group.location}</div>
                </div>

                <div style="margin-top: 14px;">
                  <div style="font-size: 0.72rem; color: var(--ink-secondary); margin-bottom: 6px; font-weight: 600;">
                    MEMBERS
                  </div>
                  <div style="display: flex; gap: 6px; align-items: center;">
                    ${group.members.map(mid => {
                      const st = getStudentById(mid);
                      if (!st) return '';
                      return `
                        <div class="avatar" style="width: 32px; height: 32px; font-size: 0.75rem; background: ${st.color};" title="${st.name}">
                          ${st.initials}
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>

              <div class="card-actions">
                <button class="btn-secondary" onclick="openModal('group_detail', '${group.id}')">
                  View Circle
                </button>
                <button class="btn-primary" onclick="joinOrLeaveGroup('${group.id}')" style="background: ${isMember ? 'var(--parchment)' : 'var(--accent)'}; color: ${isMember ? 'var(--ink)' : '#fff'};">
                  ${isMember ? 'Leave Circle' : isFull ? 'Circle Full' : 'Join Circle'}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Tab 3: Schedule Planner
  else if (currentTab === 'schedule') {
    contentHtml = `
      <section class="hero-editorial" style="margin-bottom: 24px; padding-bottom: 20px;">
        <div>
          <h2 class="serif">Your Weekly Study Availability</h2>
          <p>
            Click any cell to toggle your open study windows. Study Circle uses this matrix
            to calculate true schedule synchrony with peers.
          </p>
        </div>
        <div style="font-size: 0.82rem; color: var(--ink-secondary);">
          🟢 Green = Free for collaborative study
        </div>
      </section>

      <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; overflow-x: auto;">
        <table class="schedule-matrix">
          <thead>
            <tr>
              <th style="width: 120px;">Time Slot</th>
              ${DAYS.map(d => `<th>${d}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${SLOTS.map(s => `
              <tr>
                <td style="font-weight: 600; background: var(--parchment); text-align: left; padding-left: 12px;">
                  ${s}
                  <span style="display: block; font-size: 0.65rem; color: var(--ink-secondary); font-weight: normal;">
                    ${s === 'Morning' ? '8am – 12pm' : s === 'Afternoon' ? '12pm – 5pm' : s === 'Evening' ? '5pm – 9pm' : '9pm – 12am'}
                  </span>
                </td>
                ${DAYS.map(d => {
                  const isFree = (currentU.availability[d] || []).includes(s);
                  return `
                    <td class="${isFree ? 'cell-free' : ''}" style="cursor: pointer; user-select: none;" onclick="toggleScheduleSlot('${d}', '${s}')">
                      ${isFree ? 'Available' : '—'}
                    </td>
                  `;
                }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Tab 4: Network & Requests
  else if (currentTab === 'network') {
    const inbound = appState.requests.filter(r => r.to === currentU.id);
    const saved = appState.students.filter(s => appState.savedIds.includes(s.id));

    contentHtml = `
      <div style="margin-bottom: 28px;">
        <h2 class="serif" style="font-size: 2rem; letter-spacing: -0.02em;">Your Academic Network</h2>
        <p style="color: var(--ink-secondary); font-size: 0.9rem; margin-top: 4px;">
          Manage inbound invitations, track sent requests, and view bookmarked peers.
        </p>
      </div>

      <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px;">
        Inbound Requests (${inbound.filter(r => r.status === 'pending').length})
      </h3>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px;">
        ${inbound.length === 0 ? `
          <div style="padding: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; color: var(--ink-secondary); font-size: 0.88rem;">
            No connection invitations right now. Peers discovering you through your courses will reach out here.
          </div>
        ` : inbound.map(req => {
          const sender = getStudentById(req.from);
          if (!sender) return '';
          const match = calculateMatch(currentU, sender);
          return `
            <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 18px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
              <div style="display: flex; gap: 12px; align-items: center;">
                <div class="avatar" style="background: ${sender.color};">${sender.initials}</div>
                <div>
                  <div style="display: flex; gap: 8px; align-items: baseline;">
                    <strong style="font-size: 0.95rem;">${sender.name}</strong>
                    <span style="font-size: 0.8rem; color: var(--ink-secondary);">${sender.major}</span>
                    <span class="tag match">${match.score}% Match</span>
                  </div>
                  <p style="font-size: 0.84rem; color: var(--ink); margin-top: 4px; font-style: italic;">
                    "${req.note}"
                  </p>
                </div>
              </div>

              <div style="display: flex; gap: 8px;">
                ${req.status === 'pending' ? `
                  <button class="btn-secondary" onclick="handleRequestDecision('${req.id}', 'declined')">Decline</button>
                  <button class="btn-primary" onclick="handleRequestDecision('${req.id}', 'accepted')">Accept & Connect</button>
                ` : `
                  <span class="tag" style="text-transform: capitalize;">Status: ${req.status}</span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px;">
        Saved Peer Profiles (${saved.length})
      </h3>
      <div class="cards-grid">
        ${saved.length === 0 ? `
          <div style="grid-column: 1 / -1; padding: 32px; background: var(--surface); border: 1px dashed var(--border); border-radius: 12px; text-align: center; color: var(--ink-secondary);">
            No saved profiles yet. Click the "Save" button on any partner card to keep them here for later.
          </div>
        ` : saved.map(student => {
          const match = calculateMatch(currentU, student);
          return `
            <div class="student-card">
              <div class="card-top">
                <div style="display: flex; gap: 12px; align-items: center;">
                  <div class="avatar" style="background: ${student.color};">${student.initials}</div>
                  <div class="student-meta">
                    <h3>${student.name}</h3>
                    <p>${student.major}</p>
                  </div>
                </div>
                <div class="score-badge">${match.score}%</div>
              </div>
              <div class="card-actions">
                <button class="btn-secondary" onclick="toggleSaveStudent('${student.id}')">Remove Bookmark</button>
                <button class="btn-primary" onclick="openModal('inspect', '${student.id}')">View Profile</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Tab 5: My Profile
  else if (currentTab === 'profile') {
    contentHtml = `
      <div style="max-width: 680px; margin: 0 auto; background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 32px;">
        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 24px;">
          <div class="avatar" style="width: 64px; height: 64px; font-size: 1.2rem; background: ${currentU.color};">
            ${currentU.initials}
          </div>
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 700;">${currentU.name}</h2>
            <p style="color: var(--ink-secondary); font-size: 0.88rem;">${currentU.major} · ${currentU.year}</p>
            <p style="color: var(--ink-secondary); font-size: 0.8rem;">${currentU.school}</p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 18px;">
          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--ink-secondary);">STUDY PHILOSOPHY & BIO</label>
            <p class="card-bio" style="margin-top: 4px; font-size: 0.95rem;">"${currentU.bio}"</p>
          </div>

          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--ink-secondary);">CURRENT COURSES</label>
            <div class="card-tags" style="margin-top: 6px;">
              ${currentU.courses.map(c => `<span class="tag match">${c}</span>`).join('')}
            </div>
          </div>

          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--ink-secondary);">LEARNING MODALITIES</label>
            <div class="card-tags" style="margin-top: 6px;">
              ${currentU.learning.map(l => `<span class="tag">${l}</span>`).join('')}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: var(--canvas); padding: 12px; border-radius: 8px;">
              <div style="font-size: 0.72rem; color: var(--ink-secondary);">FAVORITE VENUE</div>
              <div style="font-weight: 600; font-size: 0.88rem; margin-top: 2px;">${currentU.venue}</div>
            </div>
            <div style="background: var(--canvas); padding: 12px; border-radius: 8px;">
              <div style="font-size: 0.72rem; color: var(--ink-secondary);">SESSION RHYTHM</div>
              <div style="font-weight: 600; font-size: 0.88rem; margin-top: 2px;">${currentU.session}</div>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border); padding-top: 16px; margin-top: 8px;">
            <button class="btn-secondary" onclick="resetDemoData()">Reset All Demo Data</button>
          </div>
        </div>
      </div>
    `;
  }

  // Modals Rendering
  let modalHtml = '';
  if (modalState) {
    if (modalState.type === 'inspect') {
      const student = getStudentById(modalState.data);
      if (student) {
        const match = calculateMatch(currentU, student);
        const isSaved = appState.savedIds.includes(student.id);
        modalHtml = `
          <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; gap: 14px; align-items: center;">
                  <div class="avatar" style="background: ${student.color};">${student.initials}</div>
                  <div>
                    <h2 style="font-size: 1.25rem; font-weight: 700;">${student.name}</h2>
                    <p style="font-size: 0.82rem; color: var(--ink-secondary);">${student.major} · ${student.year}</p>
                  </div>
                </div>
                <button onclick="closeModal()" style="background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--ink-secondary);">✕</button>
              </div>

              <div style="background: var(--parchment); padding: 16px 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-size: 0.78rem; color: var(--ink-secondary); font-weight: 600;">OVERALL COMPATIBILITY</div>
                  <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent);">${match.score}%</div>
                </div>
                <div style="text-align: right; font-size: 0.78rem; color: var(--ink-secondary);">
                  Grounded in actual course enrollments & schedule overlap
                </div>
              </div>

              <div>
                <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--ink-secondary); margin-bottom: 8px; letter-spacing: 0.04em;">
                  DIMENSIONAL BREAKDOWN
                </h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 2px;">
                      <span>Course & Curriculum Alignment (35%)</span>
                      <strong>${match.courses}%</strong>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--border); border-radius: 3px; overflow: hidden;">
                      <div style="width: ${match.courses}%; height: 100%; background: var(--accent);"></div>
                    </div>
                  </div>

                  <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 2px;">
                      <span>Schedule Synchrony (25%)</span>
                      <strong>${match.schedule}% (${match.commonSlots} common windows)</strong>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--border); border-radius: 3px; overflow: hidden;">
                      <div style="width: ${match.schedule}%; height: 100%; background: var(--sage);"></div>
                    </div>
                  </div>

                  <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 2px;">
                      <span>Learning Style Harmony (20%)</span>
                      <strong>${match.styles}%</strong>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--border); border-radius: 3px; overflow: hidden;">
                      <div style="width: ${match.styles}%; height: 100%; background: var(--terracotta);"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--ink-secondary); margin-bottom: 8px;">
                  SCHEDULE OVERLAY (MUTUAL FREE HOURS)
                </h4>
                <table class="schedule-matrix">
                  <thead>
                    <tr>
                      <th>Slot</th>
                      ${DAYS.map(d => `<th>${d}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${SLOTS.map(s => `
                      <tr>
                        <td style="font-size: 0.7rem; background: var(--parchment);">${s}</td>
                        ${DAYS.map(d => {
                          const uFree = (currentU.availability[d] || []).includes(s);
                          const pFree = (student.availability[d] || []).includes(s);
                          const both = uFree && pFree;
                          return `
                            <td class="${both ? 'cell-match' : pFree ? 'cell-free' : ''}" style="font-size: 0.68rem;">
                              ${both ? 'Both' : pFree ? student.initials : '—'}
                            </td>
                          `;
                        }).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <div style="display: flex; gap: 10px; margin-top: 8px;">
                <button class="btn-secondary" style="flex: 1;" onclick="toggleSaveStudent('${student.id}')">
                  ${isSaved ? '★ Bookmarked' : '☆ Bookmark'}
                </button>
                <button class="btn-primary" style="flex: 2;" onclick="openModal('invite', '${student.id}')">
                  Send Study Invitation
                </button>
              </div>
            </div>
          </div>
        `;
      }
    } else if (modalState.type === 'invite') {
      const student = getStudentById(modalState.data);
      if (student) {
        modalHtml = `
          <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" style="max-width: 500px;" onclick="event.stopPropagation()">
              <h3 style="font-size: 1.2rem; font-weight: 700;">Invite ${student.name} to Study</h3>
              <p style="font-size: 0.84rem; color: var(--ink-secondary);">
                Include a personal note detailing the courses or problem sets you would like to collaborate on.
              </p>

              <form onsubmit="sendStudyInvite(event, '${student.id}')">
                <textarea
                  id="invite-note-text"
                  style="width: 100%; height: 110px; padding: 12px; border-radius: 8px; border: 1px solid var(--border); font-family: inherit; font-size: 0.85rem;"
                  placeholder="Hi ${student.name}! Want to work on ${student.courses[0] || 'problem sets'} together?"
                ></textarea>

                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 14px;">
                  <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                  <button type="submit" class="btn-primary">Send Invitation</button>
                </div>
              </form>
            </div>
          </div>
        `;
      }
    } else if (modalState.type === 'create_group') {
      modalHtml = `
        <div class="modal-overlay" onclick="closeModal()">
          <div class="modal-content" style="max-width: 520px;" onclick="event.stopPropagation()">
            <h3 style="font-size: 1.25rem; font-weight: 700;">Start a New Study Circle</h3>
            <p style="font-size: 0.84rem; color: var(--ink-secondary);">
              Create a focused study circle around a specific course or milestone.
            </p>

            <form onsubmit="createStudyGroup(event)" style="display: flex; flex-direction: column; gap: 14px;">
              <div>
                <label style="font-size: 0.78rem; font-weight: 600;">Circle Title</label>
                <input name="title" required placeholder="e.g. Midterm 2 Review Cohort" style="width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-top: 4px;" />
              </div>

              <div>
                <label style="font-size: 0.78rem; font-weight: 600;">Course Code</label>
                <input name="course" required placeholder="e.g. CS 61B" style="width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-top: 4px;" />
              </div>

              <div>
                <label style="font-size: 0.78rem; font-weight: 600;">Description</label>
                <textarea name="desc" required rows="3" placeholder="What is the group focus, structure, and expectation?" style="width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-top: 4px;"></textarea>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <label style="font-size: 0.78rem; font-weight: 600;">Meeting Day</label>
                  <select name="day" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 6px; margin-top: 4px;">
                    ${DAYS.map(d => `<option value="${d}">${d}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label style="font-size: 0.78rem; font-weight: 600;">Time Slot</label>
                  <select name="slot" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 6px; margin-top: 4px;">
                    ${SLOTS.map(s => `<option value="${s}">${s}</option>`).join('')}
                  </select>
                </div>
              </div>

              <div>
                <label style="font-size: 0.78rem; font-weight: 600;">Study Location / Venue</label>
                <input name="location" required placeholder="e.g. Moffitt Library Room 342 or Zoom" style="width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-top: 4px;" />
              </div>

              <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px;">
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn-primary">Launch Circle</button>
              </div>
            </form>
          </div>
        </div>
      `;
    } else if (modalState.type === 'group_detail') {
      const group = appState.groups.find(g => g.id === modalState.data);
      if (group) {
        modalHtml = `
          <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <span class="tag match">${group.course}</span>
                  <h2 style="font-size: 1.3rem; font-weight: 700; margin-top: 6px;">${group.title}</h2>
                </div>
                <button onclick="closeModal()" style="background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--ink-secondary);">✕</button>
              </div>

              <p style="font-size: 0.9rem; color: var(--ink); line-height: 1.5;">${group.description}</p>

              <div style="background: var(--canvas); padding: 14px; border-radius: 10px; font-size: 0.82rem; display: flex; flex-direction: column; gap: 6px;">
                <div>📅 <strong>Every ${group.day} · ${group.slot}</strong></div>
                <div>📍 <strong>Location:</strong> ${group.location}</div>
                <div>👥 <strong>Capacity:</strong> ${group.members.length} / ${group.limit} members</div>
              </div>

              <div>
                <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--ink-secondary); margin-bottom: 10px;">
                  CURRENT PARTICIPANTS
                </h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${group.members.map(mid => {
                    const st = getStudentById(mid);
                    if (!st) return '';
                    const match = calculateMatch(currentU, st);
                    return `
                      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--parchment); padding: 8px 12px; border-radius: 8px;">
                        <div style="display: flex; gap: 10px; align-items: center;">
                          <div class="avatar" style="width: 32px; height: 32px; font-size: 0.75rem; background: ${st.color};">${st.initials}</div>
                          <div>
                            <strong style="font-size: 0.85rem;">${st.name}</strong>
                            <span style="font-size: 0.75rem; color: var(--ink-secondary); margin-left: 6px;">${st.major}</span>
                          </div>
                        </div>
                        ${st.id !== currentU.id ? `<span class="score-badge" style="font-size: 0.8rem; padding: 2px 6px;">${match.score}% Match</span>` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 8px;">
                <button class="btn-secondary" onclick="closeModal()">Close</button>
                <button class="btn-primary" onclick="joinOrLeaveGroup('${group.id}')">
                  ${group.members.includes(currentU.id) ? 'Leave Circle' : 'Join Circle'}
                </button>
              </div>
            </div>
          </div>
        `;
      }
    }
  }

  container.innerHTML = `
    <div class="app-shell">
      <!-- Masthead -->
      <header class="masthead">
        <div class="brand">
          <div class="brand-symbol">SC</div>
          <div class="brand-text">
            <h1>Study Circle</h1>
            <p>Thoughtful matching for academic collaboration</p>
          </div>
        </div>

        <div class="user-switch-bar">
          <span>Viewing as:</span>
          <select onchange="switchUser(this.value)">
            ${appState.students.map(s => `
              <option value="${s.id}" ${s.id === currentU.id ? 'selected' : ''}>
                ${s.name} (${s.major.split(' ')[0]})
              </option>
            `).join('')}
          </select>
          <span style="font-size: 0.75rem; color: var(--ink-secondary);">• ${currentU.streak}d streak</span>
        </div>
      </header>

      <!-- View Navigation Tabs -->
      <nav class="view-tabs">
        <button class="view-tab ${currentTab === 'discover' ? 'active' : ''}" onclick="setViewTab('discover')">
          Discover Partners
        </button>
        <button class="view-tab ${currentTab === 'groups' ? 'active' : ''}" onclick="setViewTab('groups')">
          Study Groups (${appState.groups.length})
        </button>
        <button class="view-tab ${currentTab === 'schedule' ? 'active' : ''}" onclick="setViewTab('schedule')">
          My Weekly Rhythm
        </button>
        <button class="view-tab ${currentTab === 'network' ? 'active' : ''}" onclick="setViewTab('network')">
          Network & Requests (${pendingReceived.length})
        </button>
        <button class="view-tab ${currentTab === 'profile' ? 'active' : ''}" onclick="setViewTab('profile')">
          My Profile
        </button>
      </nav>

      <!-- Dynamic Tab Content -->
      <main>${contentHtml}</main>

      <!-- Active Modal Container -->
      ${modalHtml}
    </div>
  `;
}

// Initial Render
renderApp();
