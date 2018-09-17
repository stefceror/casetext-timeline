import Chart from "./chart";
import DataParser from "./data_parser";
import frontexpress from "frontexpress";

const app = frontexpress();

let rawData = {
  counts: { case: 16 },
  case: {
    rows: [
      {
        type: "case",
        citations: [],
        citationCount: 0,
        citationString: "Case No.15-cv-05433-EDL (N.D. Cal. Mar. 27, 2018)",
        dates: { decide: 1522108800000 },
        title: "Valadez v. CSX Intermodal Terminals, Inc.",
        highlights: [
          "[If] reasonable people could differ on whether a worker is an employee or an independent contractor based on the evidence in the case, the question is not for a court to decide; it must go to the jury. This is true even if no significant dispute exists about the underlying facts, because the act of weighing and applying numerous intertwined factors, based on particular facts, is itself generally the job of the <em>jury.Cotter v. Lyft, Inc., 60 F. Supp. 3d 1067, 1076-77 (N.D. Cal. 2015)</em>. The court may grant summary judgment only if it concludes that only a single inference and conclusion may be drawn from all the facts. Id. However, that does not mean that the court cannot determine employment status as a matter of law unless all the factors in this multi-factor test must point in the same direction. Id. at 1077."
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "valadez-v-csx-intermodal-terminals-inc"
      },
      {
        type: "case",
        citations: ["279 F. Supp. 3d 1001"],
        citationCount: 0,
        citationString: "279 F. Supp. 3d 1001 (N.D. Cal. 2018)",
        dates: { decide: 1515369600000 },
        title: "Goldthorpe v. Cathay Pac. Airways Ltd.",
        highlights: [
          'After all, California\'s wage and hour laws (including Wage Order 9) were designed to protect workers, and to prevent employers from exploiting their bargaining advantage by denying workers fair wages and tolerable working conditions. <em>Cotter v. Lyft, Inc. , 60 F.Supp.3d 1067, 1074 (N.D. Cal. 2015)</em> ; see also Brinker , 53 Cal. 4th at 1026–27, 139 Cal.Rptr.3d 315, 273 P.3d 513. Courts must construe these laws "with an eye towards the purposes [they] were meant to serve, and the type of person they were meant to protect."'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "goldthorpe-v-cathay-pac-airways-ltd"
      },
      {
        type: "case",
        citations: [],
        citationCount: 0,
        citationString: "Case No.16-cv-05237-EDL (N.D. Cal. Jun. 16, 2017)",
        dates: { decide: 1497571200000 },
        title: "Ledesma v. CSX Intermodal Terminals, Inc.",
        highlights: [
          'Plaintiff also relies on a number of summary judgment cases that apply a burden-shifting analysis to determine employment status: "[O]nce the employee establishes a prima facie case, the burden shifts to the employer, which it may prove, if it can, that the presumed employee was an independent contractor." Narayan v. EGL, Inc., 616 F.3d 895, 900 (9th Cir. 2010); Hennighan v. Insphere Insurance Solutions, Inc., 38 F.Supp.3d 1083, 1097, aff\'d (9th Cir. 2016); <em>Cotter v. Lyft, Inc., 60 F.Supp.3d 1067, 1077 (N.D. Cal. 2015)</em>; Robinson v. George, 16 Cal. 2d 238, 244 (1940) (on motion for nonsuit, fact that individual performs work and labor for another is prima facie evidence of employment). These cases are inapposite because they deal with summary judgment -- i.e., whether the plaintiff has presented sufficient evidence to establish employment status -- and not a motion to dismiss.'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "ledesma-v-csx-intermodal-terminals-inc"
      },
      {
        type: "case",
        citations: [],
        citationCount: 0,
        citationString: "Case No.12-cv-05790-JST (N.D. Cal. Apr. 24, 2017)",
        dates: { decide: 1492992000000 },
        title: "Flores v. Velocity Express, LLC",
        highlights: [
          'Ruiz, 754 F.3d at 1100 (quoting Borello, 769 P.2d at 407) (emphasis in original). In both Ruiz and Alexander, which are factually very similar to this case, the Ninth Circuit held that the plaintiff drivers were employees as a matter of law because "<em>the arrow pointed so strongly in the direction of one status or the other that no reasonable juror could have pointed the arrow in the opposite direction after applying California\'s multi-factor test.</em>" Cotter v. Lyft, Inc., 60 F. Supp. 3d 1067, 1078 (N.D. Cal. 2015).'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "flores-v-velocity-express-llc-3"
      },
      {
        type: "case",
        citations: ["250 F. Supp. 3d 468"],
        citationCount: 2,
        citationString: "250 F. Supp. 3d 468 (N.D. Cal. 2017)",
        dates: { decide: 1492992000000 },
        title: "Flores v. Velocity Express, LLC",
        highlights: [
          'Ruiz, 754 F.3d at 1100 (quoting Borello, 256 Cal.Rptr. 543, 769 P.2d at 407 ) (emphasis in original). In both Ruiz and Alexander, which are factually very similar to this case, the Ninth Circuit held that the plaintiff drivers were employees as a matter of law because "<em>the arrow pointed so strongly in the direction of one status or the other that no reasonable juror could have pointed the arrow in the opposite direction after applying California\'s multi-factor test.</em>" Cotter v. Lyft, Inc., 60 F.Supp.3d 1067, 1078 (N.D. Cal. 2015).'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: {
          totalCount: 1,
          rows: [
            {
              slug:
                "blair-ex-rel-all-other-persons-similarly-situated-v-transam-trucking-inc-7",
              text:
                'Concluding that employer "could and did exercise significant control" over drivers for a number of reasons, including that the employer required the drivers to enroll in its insurance program or to obtain insurance that complied with the employer\'s requirements',
              title: "Blair v. Transam Trucking, Inc.",
              citationString:
                "Case No. 09-2443-EFM-KGG (D. Kan. Mar. 28, 2018)",
              citationCount: 0
            }
          ]
        },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "flores-v-velocity-express-llc-6"
      },
      {
        type: "case",
        citations: ["242 F. Supp. 3d 910"],
        citationCount: 1,
        citationString: "242 F. Supp. 3d 910 (N.D. Cal. 2017)",
        dates: { decide: 1489708800000 },
        title: "Bowerman v. Field Asset Servs., Inc.",
        highlights: [
          'Cristler v. Express Messenger Sys., Inc. , 171 Cal.App.4th 72, 76, 89 Cal.Rptr.3d 34 (2009). "<em>Whether a worker is classified as an employee or an independent contractor has great consequences. California law gives many benefits and protections to employees; independent contractors get virtually none.</em>" Cotter v. Lyft, Inc. , 60 F.Supp.3d 1067, 1073–74 (N.D. Cal. 2015). Of particular relevance here, employees are generally entitled to overtime compensation, Cal. Labor Code §§ 510, 1194, and indemnification for business expenses, Cal. Labor Code § 2802.'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: {
          totalCount: 1,
          rows: [
            {
              slug: "valadez-v-csx-intermodal-terminals-inc",
              text:
                "Relying on Hurst and Narayan to reject a defendant's argument that its specific requirements were not evidence of control because they were designed to ensure compliance with applicable law",
              title: "Valadez v. CSX Intermodal Terminals, Inc.",
              citationString:
                "Case No.15-cv-05433-EDL (N.D. Cal. Mar. 27, 2018)",
              citationCount: 0
            }
          ]
        },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "bowerman-v-field-asset-servs-inc-2"
      },
      {
        type: "case",
        citations: [],
        citationCount: 0,
        citationString: "Case No. 13-cv-04065-VC (N.D. Cal. Mar. 16, 2017)",
        dates: { decide: 1489622400000 },
        title: "Cotter v. Lyft, Inc.",
        highlights: [
          "This ruling does not rehash the history of the case or the issues addressed in prior rulings. For a full background on the case, please see those prior rulings, which can be accessed at the Court's website.Cotter v. Lyft, Inc., Dkt. No. 94, <em>60 F. Supp. 3d 1067 (N.D. Cal. 2015)</em> (denying the parties' cross-motions for summary judgment); Cotter v. Lyft, Inc., Dkt. No. 200, 176 F. Supp. 3d 930 (N.D. Cal. 2016) (denying the motion for preliminary approval of the $12 million settlement); Cotter v. Lyft, Inc., 193 F. Supp. 3d 1030 (N.D. Cal. 2016) (granting the motion for preliminary approval of the $27 million settlement); Cotter v. Lyft, Inc., Dkt."
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "cotter-v-lyft-inc-4"
      },
      {
        type: "case",
        citations: [],
        citationCount: 0,
        citationString: "Case No. 16-cv-03237-LB (N.D. Cal. Sep. 28, 2016)",
        dates: { decide: 1475020800000 },
        title: "Lowenthal v. Quicklegal, Inc.",
        highlights: [
          'Generally, like the FLSA, independent contractors are not "employees" covered by California\'s labor laws. See <em>Cotter v. Lyft, Inc., 60 F. Supp. 3d 1067, 1073-74 (N.D. Cal. 2015)</em>; Chin, Wiseman, Callahan and Lowe, Cal. Prac. Guide Employment Litigation § 11:116 (The Rutter Group 2016).'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "lowenthal-v-quicklegal-inc"
      },
      {
        type: "case",
        citations: ["199 F. Supp. 3d 284"],
        citationCount: 0,
        citationString: "199 F. Supp. 3d 284 (D. Mass. 2016)",
        dates: { decide: 1470700800000 },
        title: "Bekele v. Lyft, Inc.",
        highlights: [
          'At least some courts have denied ride-sharing companies\' motions for summary judgment on similar issues, holding that whether drivers are employees or independent contractors is a factual question for a jury. See, e.g., <em>Cotter v. Lyft, Inc., 60 F.Supp.3d 1067, 1081</em>–82 (N.D.Cal.2015) (holding that whether Lyft drivers are employees or independent contractors is for a "jur[y] to decide" under California law); O\'Connor v. Uber Techs., Inc., 82 F.Supp.3d 1133, 1153 (N.D.Cal.2015) (holding that Uber drivers are "presumptive employees," but that the ultimate issue of classification depends on disputed factual issues).b. Whether the Class-Proceeding Waiver Violates the NLRAThe Lyft arbitration provision to which Bekele agreed reads, in relevant part, as follows:You and we agree that any claim, action or proceeding arising out of or related to the Agreement must be brought in your individual capacity, and not as a plaintiff or class member in any purported class, collective, or representative proceeding.'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "bekele-v-lyft-inc"
      },
      {
        type: "case",
        citations: ["199 F. Supp. 3d 284"],
        citationCount: 0,
        citationString: "199 F. Supp. 3d 284 (D. Mass. 2016)",
        dates: { decide: 1470700800000 },
        title: "Bekele v. Lyft, Inc.",
        highlights: [
          'At least some courts have denied ride-sharing companies\' motions for summary judgment on similar issues, holding that whether drivers are employees or independent contractors is a factual question for a jury. See, e.g., <em>Cotter v. Lyft, Inc., 60 F.Supp.3d 1067, 1081</em>–82 (N.D.Cal.2015) (holding that whether Lyft drivers are employees or independent contractors is for a "jur[y] to decide" under California law); O\'Connor v. Uber Techs., Inc., 82 F.Supp.3d 1133, 1153 (N.D.Cal.2015) (holding that Uber drivers are "presumptive employees," but that the ultimate issue of classification depends on disputed factual issues).b. Whether the Class-Proceeding Waiver Violates the NLRAThe Lyft arbitration provision to which Bekele agreed reads, in relevant part, as follows:You and we agree that any claim, action or proceeding arising out of or related to the Agreement must be brought in your individual capacity, and not as a plaintiff or class member in any purported class, collective, or representative proceeding.'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "bekele-v-lyft-inc-1"
      },
      {
        type: "case",
        citations: ["193 F. Supp. 3d 1030"],
        citationCount: 0,
        citationString: "193 F. Supp. 3d 1030 (N.D. Cal. 2016)",
        dates: { decide: 1466640000000 },
        title: "Cotter v. Lyft, Inc.",
        highlights: [
          "Accordingly, the motion for preliminary approval is granted.This ruling presumes that the reader is familiar with the background of the case, which is discussed more fully in the Court's prior rulings. See <em>generallyCotter v. Lyft, Inc. , 60 F.Supp.3d 1067</em> (N.D.Cal.2015) ; Cotter v. Lyft, Inc. , No. 13–cv–04065–VC, 176 F.Supp.3d 930, 2016 WL 1394236 (N.D.Cal. April 7, 2016).I.The plaintiffs in this case are current or former drivers for Lyft in California."
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "cotter-v-lyft-inc-10"
      },
      {
        type: "case",
        citations: ["193 F. Supp. 3d 1030"],
        citationCount: 0,
        citationString: "193 F. Supp. 3d 1030 (N.D. Cal. 2016)",
        dates: { decide: 1466640000000 },
        title: "Cotter v. Lyft, Inc.",
        highlights: [
          "Accordingly, the motion for preliminary approval is granted.This ruling presumes that the reader is familiar with the background of the case, which is discussed more fully in the Court's prior rulings. See <em>generallyCotter v. Lyft, Inc. , 60 F.Supp.3d 1067</em> (N.D.Cal.2015) ; Cotter v. Lyft, Inc. , No. 13–cv–04065–VC, 176 F.Supp.3d 930, 2016 WL 1394236 (N.D.Cal. April 7, 2016).I.The plaintiffs in this case are current or former drivers for Lyft in California."
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "cotter-v-lyft-inc-6"
      },
      {
        type: "case",
        citations: ["184 F. Supp. 3d 774"],
        citationCount: 0,
        citationString: "184 F. Supp. 3d 774 (N.D. Cal. 2016)",
        dates: { decide: 1462320000000 },
        title: "Jane Doe v. Uber Techs., Inc.",
        highlights: [
          'O\'Connor v. Uber Techs., Inc. , No. 13–cv–3826, 2013 WL 6354534, at *6 (N.D.Cal. Dec. 5, 2013). In Cotter v. Lyft, Inc. , Judge Chhabria denied a summary judgment motion brought by software app operator Lyft. Judge Chhabria refused to find as a matter of law that drivers who used the Lyft app were independent contractors, where the evidence showed that "<em>Lyft retains a good deal of control over how [the drivers] proceed.</em>" Cotter v. Lyft, Inc. , 60 F.Supp.3d 1067, 1078 (N.D.Cal.2015).'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "doe-v-uber-techs-inc"
      },
      {
        type: "case",
        citations: ["184 F. Supp. 3d 774"],
        citationCount: 0,
        citationString: "184 F. Supp. 3d 774 (N.D. Cal. 2016)",
        dates: { decide: 1462320000000 },
        title: "Doe v. Uber Techs., Inc.",
        highlights: [
          'O\'Connor v. Uber Techs., Inc. , No. 13–cv–3826, 2013 WL 6354534, at *6 (N.D.Cal. Dec. 5, 2013). In Cotter v. Lyft, Inc. , Judge Chhabria denied a summary judgment motion brought by software app operator Lyft. Judge Chhabria refused to find as a matter of law that drivers who used the Lyft app were independent contractors, where the evidence showed that "<em>Lyft retains a good deal of control over how [the drivers] proceed.</em>" Cotter v. Lyft, Inc. , 60 F.Supp.3d 1067, 1078 (N.D.Cal.2015).'
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: { totalCount: 0, rows: [] },
        keyPassages: { totalCount: 0, rows: [] },
        insights: { totalCount: 0, rows: [] },
        slug: "doe-v-uber-techs-inc-2"
      },
      {
        type: "case",
        citations: ["176 F. Supp. 3d 930"],
        citationCount: 18,
        citationString: "176 F. Supp. 3d 930 (N.D. Cal. 2016)",
        dates: { decide: 1459987200000 },
        title: "Cotter v. Lyft, Inc.",
        highlights: [
          "Dkt. No. 94; <em>Cotter v. Lyft, Inc., 60 F.Supp.3d 1067</em> (N.D.Cal.2015). The Court explained that although Cotter and Maciel were like independent contractors in some ways (for example, they could control their own schedules), they were like employees in other ways (for example, Lyft retained the right to control how Cotter and Maciel performed their jobs when they did choose to work, and Lyft retained the right to terminate them for any reason)."
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: {
          totalCount: 2,
          rows: [
            {
              slug: "cotter-v-lyft-inc-4",
              text:
                "Denying the motion for preliminary approval of the $12 million settlement",
              title: "Cotter v. Lyft, Inc.",
              citationString:
                "Case No. 13-cv-04065-VC (N.D. Cal. Mar. 16, 2017)",
              citationCount: 0
            }
          ]
        },
        keyPassages: { totalCount: 0, rows: [] },
        insights: {
          totalCount: 1,
          rows: [
            {
              slug:
                "third-times-the-charm-court-rejects-parties-second-settlement-agreement-for-failure-to-provide-sufficient-value-to-class-members",
              text:
                "As before, the Court denied approval, but permitted an additional 60 days for the parties to submit an improved settlement.Takeaway.Hofmann offers yet another reminder that courts today strictly scrutinize class action settlements to ensure that they provide real value to settlement class members, do not appear collusive, provide sufficient notice, and treat all members of the class fairly. See, e.g., Cotter v. Lyft, No. 13-cv-04065-VC, 2016 U.S. Dist. LEXIS 50579 (N.D. Cal. Apr. 7, 2016) (denying settlement agreement that short-changed members of the class by offering less than half the reimbursement to which they were entitled); Deatrick v. Securitas Sec. Servs., No. 13-cv-050160-JST U.S. Dist."
            }
          ]
        },
        slug: "cotter-v-lyft-inc-5"
      },
      {
        type: "case",
        citations: [
          "245 Cal. App. 4th 1302",
          "200 Cal. Rptr. 3d 315",
          "2016 Daily Journal D.A.R. 3890",
          "16 Cal. Daily Op. Serv. 3301",
          "2016 Daily Journal D.A.R. 2934"
        ],
        citationCount: 20,
        citationString: "245 Cal. App. 4th 1302 (Cal. Ct. App. 2016)",
        dates: { decide: 1459123200000 },
        title: "Davis v. Farmers Ins. Exch.",
        highlights: [
          "As an employee, appellant was entitled to the benefit of wage laws requiring an employer to promptly pay all wages due, and prohibiting the employer from deducting unauthorized expenses from the employee's wages, deducting for debts due the employer, or recouping advances absent the parties' express agreement. (See Cotter v. Lyft, Inc. (N.D.Cal.2015) <em>60 F.Supp.3d 1067, 1073</em>–1074 [“Whether a worker is classified as an employee or an independent contractor has great consequences. California law gives many benefits and protections to employees; independent contractors get virtually none.”]"
        ],
        treatments: { negative: [] },
        citator: [],
        summaries: {
          totalCount: 1,
          rows: [
            {
              slug: "contracting-v-hanson-aggregates-inc-2",
              text:
                "Focusing on the estimated value of the case when litigation decisions were made",
              title: "NEI Contracting & Eng'g, Inc. v. Hanson Aggregates, Inc.",
              citationString:
                "Case No. 12-cv-01685-BAS(JLB) (S.D. Cal. May. 31, 2017)",
              citationCount: 0
            }
          ]
        },
        keyPassages: { totalCount: 0, rows: [] },
        insights: {
          totalCount: 1,
          rows: [
            {
              slug: "california-employment-law-notes-may-2016",
              text:
                'When Mendoza returned from her leave of absence, there was no longer a full-time bookkeeping position available, so the pastor offered her a part-time job, which Mendoza declined before suing for violation of the Americans with Disabilities Act ("ADA"). The district court granted summary judgment in favor of the Archbishop, and the United States Court of Appeals for the Ninth Circuit affirmed, holding that Mendoza failed to establish that a full-time position was available and, therefore, that a discriminatory reason more likely than not motivated the employer.Employee Could Proceed With Misclassification Claim, Though Wrongful Termination Claim Was Properly RejectedDavis v. Farmers Ins. Exch., 245 Cal. App. 4th 1302 (2016) William A. Davis brought suit against Farmers, claiming he had been wrongfully classified as an independent contractor rather than an employee and asserting that he had been wrongfully terminated on the basis of his age. The trial court directed a verdict in Farmers\'s favor on the wage claim, and the jury found for Farmers on the wrongful termination claim, having concluded that Farmers would have made the same termination decision for legitimate non-discriminatory reasons – even though the jury agreed with Davis that his age was a "substantial motivating factor" in his termination.'
            }
          ]
        },
        slug: "davis-v-farmers-ins-exch"
      }
    ]
  }
};

app.get("/case/:id", (req, res) => {
  let data = DataParser(rawData);

  let caseSlug = "cotter-v-lyft-inc-2";

  document.getElementById(
    "timeline-title"
  ).innerText = `Citation timeline for ${caseSlug}`;

  Chart(data);
});

app.listen();
