import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStudioData } from '../context/StudioDataContext';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function NotificationContainer() {
  const { notifications, dismissNotification } = useStudioData();

  return (
    <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border backdrop-blur-md min-w-[280px] max-w-[400px] ${
              notification.type === 'success' 
                ? 'bg-[#00658D]/90 border-[#71D2FF]/30 text-white' 
                : notification.type === 'error'
                  ? 'bg-[#B7102A]/90 border-white/20 text-white'
                  : 'bg-black/80 border-white/10 text-white'
            }`}
          >
            <div className="shrink-0">
              {notification.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#71D2FF]" />}
              {notification.type === 'error' && <AlertCircle className="w-5 h-5 text-white" />}
              {notification.type === 'info' && <Info className="w-5 h-5 text-white/60" />}
            </div>
            
            <p className="text-xs font-bold leading-relaxed flex-1">
              {notification.message}
            </p>

            <button
              onClick={() => dismissNotification(notification.id)}
              className="shrink-0 p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5 opacity-50" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
