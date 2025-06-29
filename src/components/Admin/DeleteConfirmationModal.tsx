import React from 'react';
import { X, AlertTriangle, Trash2 } from 'lucide-react';
import { UserData } from '../../api/types/users';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  user: UserData | null;
  isLoading?: boolean;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  user, 
  isLoading = false 
}) => {
  if (!isOpen || !user) return null;

  const getDisplayName = (user: UserData) => {
    if (user.displayName && user.displayName !== 'undefined undefined') {
      return user.displayName;
    }
    if (user.fullName && user.fullName !== 'undefined undefined') {
      return user.fullName;
    }
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (user.name) {
      return user.name;
    }
    return user.email;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Delete User</h2>
              <p className="text-sm text-gray-500">This action cannot be undone</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-medium text-gray-900 mb-2">
                Are you sure you want to delete this user?
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {getDisplayName(user).split(' ').map(n => n.charAt(0)).join('').toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{getDisplayName(user)}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'admin' ? 'bg-red-100 text-red-800' :
                        user.role === 'faculty' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {user.role}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                This will permanently delete the user account and all associated data. 
                This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3 p-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Deleting...
              </div>
            ) : (
              'Delete User'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal; 