
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface UpcomingExamProps {
  title: string;
  course: string;
  date: string;
  duration: string;
  status: 'scheduled' | 'available' | 'completed' | 'pending';
  examId: string;
}

const UpcomingExam = ({ title, course, date, duration, status, examId }: UpcomingExamProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'available':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Available</span>;
      case 'scheduled':
        return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Scheduled</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Completed</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{course}</p>
        </div>
        {getStatusBadge()}
      </div>
      <div className="mt-4 flex items-center text-sm">
        <div className="flex items-center text-gray-500 dark:text-gray-400 mr-4">
          <CalendarCheck size={14} className="mr-1" />
          {date}
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Clock size={14} className="mr-1" />
          {duration}
        </div>
      </div>
      <div className="mt-4">
        {status === 'available' ? (
          <Button 
            className="w-full bg-assessify-primary hover:bg-assessify-primary/90"
            asChild
          >
            <Link to={`/candidate/exams/${examId}`}>Take Exam</Link>
          </Button>
        ) : status === 'pending' ? (
          <Button variant="outline" className="w-full" disabled>
            Waiting for Instructor
          </Button>
        ) : status === 'scheduled' ? (
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/candidate/exams/${examId}`}>View Details</Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/candidate/exams/${examId}`}>View Results</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default UpcomingExam;
