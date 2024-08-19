const reasons = [
  "You make me laugh even on my worst days.",
  "You always know how to make me smile.",
  "Your hugs are the safest place in the world.",
  "You support me in everything I do.",
  "You never judge me for being myself.",
  "You make me feel loved every single day.",
  "Your smile brightens my day.",
  "You have the kindest heart.",
  "You always listen to me.",
  "You remember the little things that matter to me.",
  "You're patient with me.",
  "You challenge me to be a better person.",
  "You make even the simplest moments special.",
  "You have the best sense of humor.",
  "You believe in me when I don’t believe in myself.",
  "You’re my biggest cheerleader.",
  "You’re always there when I need you.",
  "You make every day feel like an adventure.",
  "You respect me and my opinions.",
  "You make me feel appreciated.",
  "You’re honest with me.",
  "You’re not afraid to be silly with me.",
  "You make me feel beautiful.",
  "You’re always thoughtful and caring.",
  "You’re incredibly understanding.",
  "You’re my best friend.",
  "You always know the right thing to say.",
  "You take care of me when I’m sick.",
  "You make me feel special.",
  "You inspire me to be the best version of myself.",
  "You’re strong when I need you to be.",
  "You’re my partner in everything.",
  "You’re protective of me.",
  "You make every moment with you memorable.",
  "You make me feel like I’m the only person in the world.",
  "You always make time for me.",
  "You support my dreams.",
  "You never give up on me.",
  "You make me feel safe.",
  "You always know how to cheer me up.",
  "You’re thoughtful and considerate.",
  "You’re my rock.",
  "You always make me feel better after a bad day.",
  "You bring out the best in me.",
  "You make me laugh until I cry.",
  "You’re my favorite person to talk to.",
  "You’re always willing to try new things with me.",
  "You make me feel loved, no matter what.",
  "You have a beautiful soul.",
  "You always make me feel important.",
  "You’re not afraid to show your emotions.",
  "You’re an amazing listener.",
  "You always put in effort for us.",
  "You make me feel like the luckiest person in the world.",
  "You’re always there to comfort me.",
  "You make me feel like I can do anything.",
  "You’re my favorite adventure partner.",
  "You’re my confidant.",
  "You always surprise me in the best ways.",
  "You make the ordinary extraordinary.",
  "You’re always honest with me, even when it’s hard.",
  "You make me feel like I belong.",
  "You’re my favorite person to be around.",
  "You have a heart of gold.",
  "You’re incredibly generous.",
  "You make every day brighter.",
  "You’re always there to pick me up when I’m down.",
  "You make me feel like I can conquer the world.",
  "You’re my best friend and my love.",
  "You always go out of your way for me.",
  "You make me feel cherished.",
  "You’re always there to support me.",
  "You make me feel like I’m home.",
  "You’re my favorite person to laugh with.",
  "You make me feel like I’m the center of your world.",
  "You always find a way to make me smile.",
  "You’re my partner in crime.",
  "You make me feel like I can take on anything.",
  "You’re always willing to listen to me vent.",
  "You make every moment together special.",
  "You’re the best at comforting me.",
  "You make me feel like I’m worth it.",
  "You always see the best in me.",
  "You make me feel like I can be myself.",
  "You’re incredibly patient with me.",
  "You make me feel like I’m enough.",
  "You’re always there to make me laugh.",
  "You make me feel like I’m the luckiest person alive.",
  "You’re my biggest fan.",
  "You always make me feel appreciated.",
  "You make me feel like I’m your priority.",
  "You’re always there to make me smile.",
  "You make me feel like I’m the most important person in your life.",
  "You’re always there to lift me up.",
  "You make me feel like I can conquer anything with you by my side.",
  "You’re always there to share in my joy.",
  "You make me feel like I’m loved beyond measure.",
  "You’re always there to catch me when I fall.",
  "You make me feel like I’m your everything.",
  "You make me feel loved, every single day.",
];

let currentReason = 0;

function showReason(index) {
  document.getElementById("reason").innerText = reasons[index];
}

function nextReason() {
  currentReason = (currentReason + 1) % reasons.length;
  showReason(currentReason);
}

function previousReason() {
  currentReason = (currentReason - 1 + reasons.length) % reasons.length;
  showReason(currentReason);
}

function randomReason() {
  currentReason = Math.floor(Math.random() * reasons.length);
  showReason(currentReason);
}

window.onload = () => {
  showReason(currentReason);
};
