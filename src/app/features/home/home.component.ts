import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // tabs control variable
  tab: string = 'retiree';

  // tabs control function
  setTab(tab: string) {
    this.tab = tab;
  }

  // to return list of items only under the tab being viewed
  get filteredHowItWorks() {
    return this.howItWorks.filter((item) => item.tab === this.tab);
  }

  // features data source
  features: any[] = [
    {
      icon: 'assets/icons/shield-check.svg',
      alt: 'secure and reliable',
      title: 'Secure and Reliable',
      text: 'We prioritize your data security with advanced encryption and strict privacy protocols, ensuring that your information is always protected.',
    },
    {
      icon: 'assets/icons/users-profiles-03.svg',
      alt: 'User-Friendly Experience',
      title: 'User-Friendly Experience',
      text: 'Our platform is designed with simplicity in mind. Whether youre a retiree submitting your employment history or an employer managing records, the process is quick and easy, with clear instructions at every step.',
    },
    {
      icon: 'assets/icons/bank-note-05.svg',
      alt: 'Accurate and Timely Payments',
      title: 'Accurate and Timely Payments',
      text: 'For retirees, our system ensures that once your employment history is verified, payments are processed promptly and accurately. No delays, just the benefits youve earned.',
    },
    {
      icon: 'assets/icons/book-02.svg',
      alt: 'Comprehensive Compliance for Employers',
      title: 'Comprehensive Compliance for Employers',
      text: 'Employers can rest assured knowing that they are meeting all regulatory requirements by securely uploading employee data. Our platform takes the guesswork out of compliance.',
    },
    {
      icon: 'assets/icons/help-circle-contained.svg',
      alt: '24/7 Support',
      title: '24/7 Support',
      text: 'Our dedicated support team is available around the clock to assist with any questions or concerns you may have, ensuring a seamless experience from start to finish.',
    },
  ];

  // how it works data source.
  howItWorks: any[] = [
    {
      id: 1,
      title: 'Create Your Profile',
      text: 'Start by creating an account. Youll be asked to provide basic personal information to get started.',
      tab: 'retiree',
    },
    {
      id: 2,
      title: 'Submit Employment History',
      text: 'Enter relevant employment details, through a simple, guided form. This information helps verify your eligibility for retirement payments.',
      tab: 'retiree',
    },
    {
      id: 3,
      title: 'Verify and Confirm',
      text: 'Once submitted, your information is reviewed for accuracy. Additional verification documents may be required.',
      tab: 'retiree',
    },
    {
      id: 4,
      title: 'Receive Your Benefits',
      text: 'Once your history is confirmed, you can begin receiving your retirement payments seamlessly, right into your bank account.',
      tab: 'retiree',
    },

    {
      id: 1,
      title: 'Verify Retiree Information',
      text: 'As a PFA, your role is to review and verify the employment history submitted by retirees. Cross-check the data provided to ensure it aligns with official records, ensuring accuracy and eligibility.',
      tab: 'PFA',
    },
    {
      id: 2,
      title: 'Capture Biometric Data',
      text: "Once the retirees employment details have been verified, PFAs are responsible for capturing biometric data, such as fingerprints and facial recognition. This added layer of security helps prevent fraud and ensures the authenticity of the retiree's claims.",
      tab: 'PFA',
    },
    {
      id: 3,
      title: 'Submit and Approve',
      text: 'After validating the information and capturing biometrics, submit the data to the platform for final approval. This step ensures that the retiree can start receiving their payments seamlessly.',
      tab: 'PFA',
    },

    {
      id: 1,
      title: 'Upload Employee Records',
      text: 'Employers can log in and upload employee data for compliance and verification purposes. This helps ensure that former employees records are correctly matched to receive retirement benefits.',
      tab: 'MDA',
    },
    {
      id: 2,
      title: 'Review and Validate',
      text: 'Our platform automatically validates the uploaded records against internal databases, making sure the information is accurate and up to date.',
      tab: 'MDA',
    },
    {
      id: 3,
      title: 'Ensure Compliance',
      text: 'By completing this process, youll meet regulatory requirements while ensuring your employees have access to the benefits they ve earned.',
      tab: 'MDA',
    },
  ];
}
