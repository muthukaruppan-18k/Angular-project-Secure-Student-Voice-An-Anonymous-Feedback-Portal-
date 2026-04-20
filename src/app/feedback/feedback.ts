import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class FeedbackComponent implements OnInit {
  feedbacks: any[] = [];
  isAdminView: boolean = false; // Default is Student view

  ngOnInit() {
    const saved = localStorage.getItem('college_feedback');
    if (saved) {
      this.feedbacks = JSON.parse(saved);
    }
  }

  submitForm(category: string, detail: string) {
    if (!detail) return alert("Please enter details");

    const newEntry = {
      category: category,
      text: detail,
      date: new Date().toLocaleString()
    };

    this.feedbacks.push(newEntry);
    localStorage.setItem('college_feedback', JSON.stringify(this.feedbacks));
    alert("Submitted Anonymously! ✅");
  }

  toggleView() {
    this.isAdminView = !this.isAdminView;
  }

  submitReply(feedbackIndex: number, staffName: string, hostelName: string, replyText: string) {
    if (!replyText || !staffName) return alert("Staff name and reply are required!");

    const reply = {
      name: staffName,
      hostel: hostelName, // Changed from subject to hostel
      message: replyText,
      date: new Date().toLocaleString()
    };

    if (!this.feedbacks[feedbackIndex].replies) {
      this.feedbacks[feedbackIndex].replies = [];
    }
    
    this.feedbacks[feedbackIndex].replies.push(reply);
    localStorage.setItem('college_feedback', JSON.stringify(this.feedbacks));
    alert("Staff Reply posted! ✅");
  }
}
